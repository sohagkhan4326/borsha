module.exports.config = {
  name: "aotoreact",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "..",
  prefix: false,
  category: "...",
  usages: "",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body ? event.body.toLowerCase() : '';
if (haha.includes(" ") || haha.includes("")){
const dipto = ['😆','🐸','🙃','😈','🤖','🙄','🐣','🍎','🐰','🦟','🧐','😐','🙂','🤐','♥️','😘','😻','😍','😸','💦','🤨','😭','😁','😜','🤫','😶','🥱','😤','🥵','😇','💋','🙈','🙀','🦵','💛','🖤','🤎','💙','💜','🦶','🙆','😏','🌸','🏵️','🍁','🌼','🔥','🐍','👄','✈️','🦛','🦐','🐇','🐮','🐰','🦃','🫦','🦋','🍒','🍓','🐼','🍊','🫤','🍍','🍌','🌚','🥥','🐛','🥕','😳','👻','😾','🧀','😒','🥹','☠️','👊','😴','😦','😷','🫣','🫂','🤕','😵','🫢','🤭','😔','💩','💣','👀','🌝','🍼','🐤','😋','😻','😕','🙀']

const r = dipto[Math.floor(Math.random() * dipto.length)];
return api.setMessageReaction(r, event.messageID, (err) => {}, true)
}
    };
module.exports.run = function (){{ try {
      if (args[0] == 'on') {
        fs.writeFileSync(pathFile, 'true');
        api.sendMessage('Auto download turned on successfully', event.threadID, event.messageID);
      } else if (args[0] == 'off') {
        fs.writeFileSync(pathFile, 'false');
        api.sendMessage('Auto download turned off successfully', event.threadID, event.messageID);
      } else {
        api.sendMessage('Wrong format. Use "auto off" or "auto on"', event.threadID, event.messageID);
      }
    } catch (e) {
      console.error('An error occurred:', e);
    }

               }}
