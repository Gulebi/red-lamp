const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    const responses = [
        "Орёл",
        "Решка"
    ];
    const Response = responses[Math.floor(Math.random()*(responses.length))];
    message.channel.send(`🪙 | ${Response}, **${message.author.username}**`);
};

module.exports.help = {
    name: "coinflip",
    aliases: ["cf"]
};