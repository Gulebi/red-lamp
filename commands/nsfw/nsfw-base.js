const Discord = require("discord.js");

module.exports.nsfw_base = async (name,image,message) => {
    const embed = new Discord.MessageEmbed()
        .setTitle(`${name} картинка для ${message.author.username}`)
        .setColor("RANDOM")
        .setImage(image)
        .setTimestamp()
        .setFooter({ text: 'red-lamp bot', iconURL: 'https://i.imgur.com/0PCQtit.png' });
    return message.channel.send({ embeds: [embed] });
}