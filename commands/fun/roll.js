const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    const responses = [
        "⠁",
        "⠃",
        "⠇",
        "⠏",
        "⠟",
        "⠿"
    ];

    const Response = responses[Math.floor(Math.random()*(responses.length))];
    message.channel.send(`🎲  | ${Response} |  🎲`);
};

module.exports.help = {
    name: "roll",
    aliases: [""]
};