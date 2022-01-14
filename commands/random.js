const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    const min = Math.ceil(Math.min.apply(Math, args))
    const max = Math.floor(Math.max.apply(Math, args))
    if (min > 1000000000000 ||
        max > 1000000000000) return;
     if (isNaN(min) ||
         isNaN(max)) return;

    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    // if (isNaN(randomNum)) return;
    message.reply(`| **${randomNum}** |`)
};

module.exports.help = {
    name: "random"
};