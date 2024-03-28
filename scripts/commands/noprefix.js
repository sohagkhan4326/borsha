const fs = require("fs");
module.exports.config = {
	name: "🙆",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
prefix: true,
	category: "no prefix",
	usages: "🙆",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("সোহাগ")==0 || event.body.indexOf("Sohag")==0 || event.body.indexOf("sohag")==0 ||
event.body.indexOf("shohag")==0 ||
event.body.indexOf("Shohag")==0 ||
 event.body.indexOf("@𝐒𝐎𝐇𝐀𝐆")==0) {
		var msg = {
				body: "༊᭄- সম্মান দিলে সম্মান পাবা!🤙💯🔥\n\n𝐒𝐎𝐇𝐀𝐆 𝐊𝐇𝐀𝐍(✷‿✷)🖤🌸༊᭄..! ❥┼─༊💝🥀",
				attachment: fs.createReadStream(__dirname + `/noprifix/sohag.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
