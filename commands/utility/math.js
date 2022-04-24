const Discord = require("discord.js");
const fs = require("fs");
const math = require("mathjs");

module.exports.run = async (client,message,args,prefix) => {
    if (args[0] == undefined || args[0] == 'undefined') {
        message.channel.send('Укажите пример');
        return;
    }
    if (args.length > 1) {
        message.channel.send('Укажите пример без пробелов');
        return;
    }

    message.reply(`\`${args[0]} = ${math.evaluate(args[0])}\``);
};

module.exports.help = {
    name: "math",
    // aliases: [""]
};