const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args,prefix) => {

	const user = message.mentions.users.first() || message.author;
    message.channel.send(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`);
};

module.exports.help = {
    name: "avatar"
};