module.exports.config = {
  name: "gckick",
  version: "2.0.0",
  permission: 2,
  credits: "ATF-TEAM",
  description: "Remove all group members",
  prefix: true,
  category: "chat box",
  usages: "",
  cooldowns: 5,
};
module.exports.run = async function({ api, event, getText,args }) {
  const { participantIDs } = await api.getThreadInfo(event.threadID)
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const botID = api.getCurrentUserID();
  const listUserID = participantIDs.filter(ID => ID != botID);
  return api.getThreadInfo(event.threadID, (err, info) => {
    if (err) return api.sendMessage("» An error occurred.", event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID()))
      return api.sendMessage(`» Need group admin rights.\nPlease add and try again.`, event.threadID, event.messageID);
    if (info.adminIDs.some(item => item.id == event.senderID)) {
      setTimeout(function() { api.removeUserFromGroup(botID, event.threadID) }, 300000);
      return api.sendMessage(`» Start deleting all members. Bye everyone.`, event.threadID, async (error, info) => {
        for (let id in listUserID) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          api.removeUserFromGroup(listUserID[id], event.threadID)
        }
      })
    } else return api.sendMessage('» Only group admins can use this command.', event.threadID, event.messageID);
  })
                           }
