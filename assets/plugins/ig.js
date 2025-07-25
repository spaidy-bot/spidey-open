const {
  command,
  getUrl,
  igdl,
  isIgUrl,
  isPrivate,
  getJson,
} = require("../../lib/");

command(
  {
    pattern: "insta",
    fromMe: isPrivate,
    desc: "To download instagram media",
    type: "user",
  },
  async (message, match) => {
    if (!match) return await message.reply("_need url_");
        try {
            let response = await getJson("https://api-aswin-sparky.koyeb.app/api/downloader/igdl?url=" + match);
            for (let i of response.data) {
                await message.sendMessage(message.jid, i.url, { quoted: message }, i.type)
            }
        } catch (e) {
            console.log(e);
        }
  });
