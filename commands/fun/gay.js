const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    const user = message.mentions.users.first() || message.author;

    const avatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`

    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Гей ${user.tag}`)
        .setImage(`https://some-random-api.ml/canvas/gay?avatar=${avatar}`)
        .setTimestamp()
        .setFooter({ text: 'red-lamp bot', iconURL: 'https://i.imgur.com/0PCQtit.png' });
    message.channel.send({ embeds: [embed] });
};

module.exports.help = {
    name: "gay",
    aliases: [""]
};