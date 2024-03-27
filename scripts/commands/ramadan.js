module.exports.config = {
    name: "status",
    version: "1.0.0",
    permission: 0,
    credits: "Rahad",
    description: "Status video",
    prefix: true, 
    category: "Video", 
    usages: "status2",
    cooldowns: 5,
    dependencies: {
        "axios": ""
    }
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const res = await axios.get(`http://nl2-4.deploy.sbs:2016/auto`);
    var data = res.data.data;
    var msg = [];
    let img1 = `${res.data.url.url}`;
    let cp = `${res.data.url.title}`
    let rahad = `${res.data.author}`

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.mp4", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.mp4"));

    {
        msg += `°\n\n__💬:____𝐍𝐞𝐯𝐞𝐫 𝐜𝐡𝐚𝐧𝐠𝐞 𝐲𝐨𝐮𝐫 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐭𝐲-!!😊🖤\n____যে ভালোবাসার সে তোমাকে তোমার মতোই ভালোবাসবে-!!❤️🥀😊シ━━━━━━━━━━━━━━━━━━\n\n✨🌺[𝐎𝐖𝐍𝐄𝐑:☞𝐒𝐎𝐇𝐀𝐆 𝐊𝐇𝐀𝐍 (✷‿✷)☜!🍂`

    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
      }
