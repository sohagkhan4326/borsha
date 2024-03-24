const fs = require('fs');
const path = require('path');
const moment = require('moment-timezone');

const birthdayFilePath = path.join(__dirname, 'cache', 'birthdays.json');

function loadBirthdays() {
  if (!fs.existsSync(birthdayFilePath)) {
    fs.writeFileSync(birthdayFilePath, '{}');
  }
  return JSON.parse(fs.readFileSync(birthdayFilePath));
}

function saveBirthdays(birthdays) {
  fs.writeFileSync(birthdayFilePath, JSON.stringify(birthdays, null, 4));
}

function listBirthdays() {
  const birthdays = loadBirthdays();
  const birthdayList = Object.values(birthdays).map(user => `${user.userName}: ${user.birthday}`).join('\n');
  return birthdayList || 'No birthdays set.';
}

module.exports.config = {
    name: 'birthday',
    version: '1.1',
    credits: 'Dipto',
    hasPermssion : 0,
    description: 'set birthday ',
    prefix: true,
    category: 'birtday',
    usages:'[mention] - [date date/month]',
    cooldowns: 5
};

module.exports.run = async function ({ api, event, args, messageID, Users }) {
    const birthdays = loadBirthdays();
    const { threadID, mentions } = event;

    if (args[0] === 'list') {
      const birthdayList = listBirthdays();
      return api.sendMessage(`List of birthdays:\n${birthdayList}`, threadID, messageID);
    }

    if (Object.keys(mentions).length > 0) {
      const userID = Object.keys(mentions)[0];
      const [day, month] = args.slice(args.indexOf('-') + 1).join('').split('/');
      const userTimezone = 'Asia/Dhaka';
      const userBirthday = moment.tz(`2023-${month}-${day}`, 'YYYY-MM-DD', userTimezone);

      if (!userID) {
        return api.sendMessage('You must mention a user to set their birthday.', threadID, messageID);
      }

      if (!day || !month) {
        return api.sendMessage('You must specify a valid birthday in the format DD/MM.', threadID, messageID);
      }

      if (userBirthday.isBefore(moment.tz('2023-01-01', 'YYYY-MM-DD', userTimezone))) {
        return api.sendMessage('You cannot set a birthday in the past.', threadID, messageID);
      }

      if (birthdays[userID]) {
        return api.sendMessage('This user\'s birthday has already been set.', threadID, messageID);
      }

      const name = await Users.getNameUser(userID);
      birthdays[userID] = {
        userName: name,
        birthday: `${day}/${month}`,
        timezone: userTimezone,
        timestamp: userBirthday.valueOf(),
        threadID: threadID,
        uid: userID
      };

      saveBirthdays(birthdays);
      return api.sendMessage(`Birthday set for ${name} = ${day}/${month}`, threadID, messageID);
    }
};

module.exports.handleEvent = async function ({ api, Users }) {
    const today = moment.tz('Asia/Dhaka');
    const [day, month] = [today.date(), today.month() + 1];

    const birthdays = loadBirthdays();
    for (const userID in birthdays) {
      const user = birthdays[userID];
      if (user.birthday === `${day}/${month}` && today.hours() === 0 && today.minutes() === 0) {
        const uid = user.uid;
        const savedThreadID = user.threadID;

        try {
          const userName = await Users.getNameUser(uid);
          await api.sendMessage({body: `🥰💋 Happy Birthday  ${userName} Baby💋🥰\n Happy Download Day Baby🐥\nPicchi Happy Birthday 😺😺`,  mentions: [{ id: uid, tag: userName }]
         } , savedThreadID);
          delete birthdays[userID];
          saveBirthdays(birthdays);
          break;
        } catch (error) {
          api.sendMessage(`Error sending birthday message: ${error}`, threadID, messageID);
        }
      }
    }
};
