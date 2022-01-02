const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args,prefix) => {
    const timeTaken = message.createdTimestamp - Date.now();
    message.reply(`Pong! ${timeTaken}ms`);
};
module.exports.help = {
    name: "ping"
};