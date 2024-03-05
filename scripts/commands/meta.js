module.exports.config = {
  name: "meta",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "Simple Banglish Ai Chatbot",
  prefix: false,
  category: "ai robot",
  usages: "/meta [typeinBanglish]",
  cooldowns: 5,
};
module.exports.run = async ({
  api: _0x3bec5f,
  event: _0x43a287,
  args: _0x47ac54
}) => {
  const _0x17c6ba = require("axios");
  if (_0x47ac54.join() == '') {
    return _0x3bec5f.sendMessage(" Hey ,আমি মেটা হাইড্রা 😎 \n\n আমাকে ব্যাবহার করতে [meta]লিখে কিছু জিগ্গেস করুন 🤗 \n\n DEV:ᴇᴍᴏɴ ʜᴀᴡʟᴀᴅᴀʀ ᵉᵐᵒⁿ-ᵇʰᵃⁱ  😼 ", _0x43a287.threadID, _0x43a287.messageID);
  } else {
    let _0x3efe3e = encodeURI(_0x47ac54.join(" "));
    const _0x11de5e = await _0x17c6ba.post("https://api.simsimi.vn/v1/simtalk", new URLSearchParams({
      'text': '' + _0x3efe3e,
      'lc': 'bn'
    }));
    var _0xc34af = _0x11de5e.data.message;
    return _0x3bec5f.sendMessage('' + _0xc34af, _0x43a287.threadID, _0x43a287.messageID);
  }
};
