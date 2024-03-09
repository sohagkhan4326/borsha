const axios = require('axios');
const fs = require('fs-extra');
module.exports.config = {
  name: "dalle",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "dipto",
  Prefix: true,
  description: "Meta AI Image Generator.",
  Category: "imagination",
  cooldowns: 5
};
module.exports.run = async function ({ args, event, api }) {
  try {
    const prompt = args.join(" ");
    const wait = await api.sendMessage("𝗪𝗮𝗶𝘁 𝗸𝗼𝗿𝗼 𝗕𝗮𝗯𝘆 <😘", event.threadID);
    const response = await axios.get(`https://all-image-genator-d1p.onrender.com/dipto/meta?prompt=${encodeURIComponent(prompt)}&key=dipto008`);
    const data = response.data.imgUrls;
    if (!data || data.length === 0) {
      return api.sendMessage("Empty response or no images generated.",event.threadID,event.messageID);
    }
    const imgData = [];
    for (let i = 0; i < data.length; i++) {
      const imgUrl = data[i];
      const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
      const imgPath = (__dirname +`/cache/${i + 1}.jpg`);
      await fs.outputFile(imgPath, imgResponse.data);
      imgData.push(fs.createReadStream(imgPath));
    }
     await api.unsendMessage(wait.messageID);
    await api.sendMessage({
      body: `✅ | Generated your images`,
      attachment: imgData
    }, event.threadID ,event.messageID);
for (const imgPath of imgData) {
       fs.unlink(imgPath);
}
  } catch (e) {
    console.error(e);
    await api.sendMessage(`Failed to genarate photo!!!!\nerror: ${e.message}`, event.threadID);
  }
};
