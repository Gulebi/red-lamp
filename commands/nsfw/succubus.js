const Discord = require("discord.js");
const fs = require("fs");

const akaneko = require('akaneko');

module.exports.run = async (client,message,args,prefix,player) => {
    if(!message.channel.nsfw) {
        return message.reply("Этот канал не поддерживает nsfw контент")
        
    } else {
        const image = await akaneko.nsfw.succubus();
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(image)
            .setTimestamp()
            .setFooter({ text: 'red-lamp bot', iconURL: 'https://i.imgur.com/0PCQtit.png' });
        return message.channel.send({ embeds: [embed] });
    }
};

module.exports.help = {
    name: "succubus",
    aliases: [""]
};