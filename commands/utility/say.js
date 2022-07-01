const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    if (!args.length) {
        message.channel.send("Укажите текст");
        message.delete(100);
        return;
    }

    const msg = args.join(" "); // Считываем то, что хотим отправить!
    message.delete(100);
    message.channel.send(msg);
    console.log(`Пользователь ${message.author.username} отправил через say: ${msg}`); // Пишем в консоль о том, что кто-то написал сообщение через бота)
};

module.exports.help = {
    name: "say",
    // aliases: [""]
};
