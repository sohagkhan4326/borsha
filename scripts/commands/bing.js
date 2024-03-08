const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "bing",
  version: "2.0.0",
  permission: 0,
  credits: "Dipto",
  description: "Generate images by Dalle-3 AI",
  prefix: true,
  category: "Dawnload",
  usages: "[text]\nJamon [A 17/18/19 years old boy/girl watching football match on TV and written Dipto and 69 on the back of his Dress, 4k",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const prompt = (event.messageReply?.body || "").split("dalle")[1] || args.join(" ");

  if (!prompt) {
    return api.sendMessage("❌| Wrong Format.\n✅ | Use 17/18 years old boy/girl watching football match on TV and written Dipto and 69 on the back of his Dress, 4k", event.threadID, event.messageID);
  }

  try {
    const tl = ["1MVkEUmrOQzFDJzdBv0CxwCbocp57f-Z5XKDjOGpaX3WEUh_E4knCc7TOme1T3mE8nE5USPrNgTqm_qMx-ahlaopONupDZTp-Q3ZK7oxQV51TapHQ0mBQar06B4HIEbSEIYMZggrxOMDSg6fn_PKaTlsOMr7GCmkVuaMe8lWi7Qtc0K1zkMwJpMtTjQMrJdOHWJkYnDI72v5HRdQiZubNfbNHQBhWqSSHshJKNP4toLg", "1MVkEUmrOQzFDJzdBv0CxwCbocp57f-Z5XKDjOGpaX3WEUh_E4knCc7TOme1T3mE8nE5USPrNgTqm_qMx-ahlaopONupDZTp-Q3ZK7oxQV51TapHQ0mBQar06B4HIEbSEIYMZggrxOMDSg6fn_PKaTlsOMr7GCmkVuaMe8lWi7Qtc0K1zkMwJpMtTjQMrJdOHWJkYnDI72v5HRdQiZubNfbNHQBhWqSSHshJKNP4toLg"];
    const cookies = tl[Math.floor(Math.random() * tl.length)];

    const w = await api.sendMessage("Wait koro baby < 😽", event.threadID);

    const response = await axios.get(`https://all-image-genator-d1p.onrender.com/dipto/dalle?prompt=${prompt}&key=dipto008&cookie=${cookies}`);
    const data = response.data.imgUrls;

    if (!data || data.length === 0) {
      return api.sendMessage("No images generated.", event.threadID, event.messageID);
    }

    const diptoo = [];

    for (let i = 0; i < data.length; i++) {
      const imgUrl = data[i];
      const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
      const imgPath = __dirname + `/cache/${i + 1}.jpg`;

      await fs.outputFile(imgPath, imgResponse.data);
      diptoo.push(fs.createReadStream(imgPath));
    }

    await api.unsendMessage(w.messageID);
    
    await api.sendMessage({
      body: `✅ |Naw Baby Tumar Generated Pic<😘`,
      attachment: diptoo
    }, event.threadID, event.messageID);
  } catch (error) {
    console.error(error);
    await api.sendMessage(`Generation failed!\nError: ${error.message}`, event.threadID, event.messageID);
  }
};
      
