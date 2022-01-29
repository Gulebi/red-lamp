const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args,prefix) => {
    const user = message.mentions.users.first() || message.author;

    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Аватарка ${user.tag}`)
        .setImage(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`)
        .setTimestamp()
        .setFooter({ text: 'red-lamp bot', iconURL: 'https://i.imgur.com/0PCQtit.png' });
    message.channel.send({ embeds: [embed] });
};

module.exports.help = {
    name: "avatar",
    aliases: ["ava"]
};