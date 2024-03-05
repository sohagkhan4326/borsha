
module.exports.config = {

  name: &quot;photoxy&quot;,

  version: &quot;2.0.0&quot;,

  permission: 2,

  credits: &quot;Nayan&quot;,

  description: &quot;&quot;,

  prefix: true,

  category: &quot;user&quot;,

  usages: &quot;text&quot;,

  cooldowns: 5,

  dependencies: {

        &#39;image-downloader&#39;: &#39;&#39;,

    &#39;nayan-server&#39;: &#39;&#39;

  }

};

module.exports.run = async function({ api, event, args }) {

 

 

  const { messageID, threadID } = event;

  const fs = require(&quot;fs&quot;);

  const axios = require(&quot;axios&quot;);

  const request = require(&quot;request&quot;);

 

  const prompt = args.join(&quot; &quot;);

  if (!args[0]) return api.sendMessage(`?Use ${global.config.PREFIX}${this.config.name} [no.] [text]n?Example:${global.config.PREFIX}${this.config.name} 1 farhannn?Total Edit limit 25...`, threadID, messageID);

 

 

  const content = args.join(&quot; &quot;);

  const msg = content.split(&quot; &quot;);

  const num = msg[0].trim();

  const name = msg[1].trim();

 

  const {photoxy} = require(&#39;nayan-server&#39;)

 

  if (num == &quot;1&quot;){ var url = &quot;https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html&quot;}

  if (num == &quot;2&quot;){ var url = &quot;https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html&quot;}

  if (num == &quot;3&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html&quot;}

  if (num == &quot;4&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html&quot;}

  if (num == &quot;5&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html&quot;}

  if (num == &quot;6&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html&quot;}

  if (num == &quot;7&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html&quot;}

  if (num == &quot;8&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html&quot;}

  if (num == &quot;9&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html&quot;}

  if (num == &quot;10&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/text-inside-the-flower-heart-369.html&quot;}

  if (num == &quot;11&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html&quot;}

  if (num == &quot;12&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html&quot;}

  if (num == &quot;13&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/create-a-layered-leaves-typography-text-effect-354.html&quot;}

  if (num == &quot;14&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html&quot;}

  if (num == &quot;15&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/3d-text-effect-under-white-cube-217.html&quot;}

  if (num == &quot;16&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html&quot;}

  if (num == &quot;17&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html&quot;}

  if (num == &quot;18&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html&quot;}

  if (num == &quot;19&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/text-under-web-matrix-effect-185.html&quot;}

  if (num == &quot;20&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html&quot;}

  if (num == &quot;21&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html&quot;}

  if (num == &quot;22&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/smoke-typography-text-effect-170.html&quot;}

  if (num == &quot;23&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html&quot;}

  if (num == &quot;24&quot;){ var url =&quot;https://photooxy.com/logo-and-text-effects/text-under-flower-165.html&quot;}

  if (num == &quot;25&quot;){ var url =&quot;https://photooxy.com/art-effects/flower-typography-text-effect-164.html&quot;}

  // you added more link same as above

 

 

 try {

  let data = await photoxy(url, name);

  console.log(data);

  var file = fs.createWriteStream(__dirname + &#39;/cache/photoxy.jpg&#39;);

 

  const link = data.url;

  const rqs = request(encodeURI(`${link}`));

   api.setMessageReaction(&quot;✅&quot;, event.messageID, (err) =&gt; {

     }, true);

  rqs.pipe(file);  

  file.on(&#39;finish&#39;, () =&gt; {

 

    setTimeout(function() {

 

      return api.sendMessage({

        body: `❐ THIS IS YOUR NAME EDIT ✌️nn___________________________________nn❐ This Bot Name : ${global.config.BOTNAME} ?n❐ This Bot Owner : 𝐒𝐎𝐇𝐀𝐆 𝐊𝐇𝐀𝐍?n❐ Your Input Name : ${name}nn___________________________________`,

        attachment: fs.createReadStream(__dirname + &#39;/cache/photoxy.jpg&#39;)

      }, threadID, messageID)

    }, 5000)

  })

    } catch (err) {

   api.setMessageReaction(&quot;❌&quot;, event.messageID, (err) =&gt; {

  }, true);

    api.sendMessage(`?Use ${global.config.PREFIX}${this.config.name} [no.] [text]n?Example:${global.config.PREFIX}${this.config.name} 1 SOHAG?Total Edit limit 25...`, event.threadID, event.messageID);  

   }

};

