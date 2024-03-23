const fs = require("fs");
module.exports.config = {
	name: "1npxs",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
  prefix: false,
	category: "no prefix",
	usages: "fiha",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🫡")==0 || event.body.indexOf("Fiha")==0 || event.body.indexOf("🫡")==0 || event.body.indexOf("fiha")==0) {
		var msg = {
				body: "-!<আসসালামু আলাইকুম 🌻🖤\nভালো আছো?🥰",
				attachment: fs.createReadStream(__dirname + `/noprefix/fiha.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

} 
