const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args,prefix) => {
    message.reply(`Pong! **${client.ws.ping}ms**`);
};
module.exports.help = {
    name: "ping"
};