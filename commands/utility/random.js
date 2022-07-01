const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    if (args[0] == undefined || args[0] == "undefined") {
        message.channel.send("Укажите диапазон");
        return;
    }

    if (args.length > 2) {
        message.channel.send("Укажите диапазон правильно");
        return;
    }

    const MIN = -1000000000;
    const MAX = 1000000000;

    const min = Math.ceil(Math.min.apply(Math, args));
    const max = Math.floor(Math.max.apply(Math, args));

    if (min < MIN || max > MAX) {
        message.channel.send(`Максимальное значение должно быть целым числом в интервале [${MIN}, ${MAX}]`);
        return;
    }

    if (isNaN(min) || isNaN(max)) {
        message.channel.send("Используйте только целые числа");
        return;
    }

    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    // if (isNaN(randomNum)) return;
    message.reply(`| **${randomNum}** |`);
};

module.exports.help = {
    name: "random",
    aliases: ["rand"],
};
