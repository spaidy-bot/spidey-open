const {
  command,
  isPrivate,
  isUrl,
  AddMp3Meta,
  getBuffer,
  toAudio,
  getJson,
  validateQuality,
} = require("../../lib");


command(
  {
    pattern: "song",
    fromMe: isPrivate,
    desc: "To download instagram media",
    type: "user",
  },
  async (message, match) => {
    if (!match) return await message.reply("_need yt url_");
        try {
            let response = await getJson("https://api-aswin-sparky.koyeb.app/api/downloader/song?search=" + match);
            let audiomp3 = await response.data.url
            await message.sendMessage(message.jid, audiomp3, { quoted: message }, "audio")
        } catch (e) {
            console.log(e);
        }
  });
