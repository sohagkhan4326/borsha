const axios = require('axios');

module.exports.config = {
  name: "imgur2",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "convert image/video into Imgur link",
  prefix: false,
  category: "tools",
  usages: "reply [image, video]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
    const dip = event.messageReply?.attachments[0]?.url;
    if (!dip) {
      return api.sendMessage('Please reply to an image or video.', event.threadID, event.messageID);
    }
    try {
      const res = await axios.get(`https://all-image-genator-d1p.onrender.com/dipto/imgur?url=${encodeURIComponent(dip)}`);
      const dipto = res.data.data;
         api.sendMessage(dipto, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      return api.sendMessage('Failed to convert image or video into link.', event.threadID, event.messageID);
    }
};
