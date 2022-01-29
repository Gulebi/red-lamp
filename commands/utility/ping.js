const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args,prefix,player) => {
    const queue = player.getQueue(message.guild);

    const embed = new Discord.MessageEmbed()
        .setTitle('Pong!')
        .setColor("#ad0000")
        .addField("Задержка бота", `\`${Math.round(client.ws.ping)}ms\``)
        .addField("Задержка голоса", !queue ? "`N/A`" : `UDP: \`${queue.connection.voiceConnection.ping.udp ?? "`N/A`"}\`ms\nWebSocket: \`${queue.connection.voiceConnection.ping.ws ?? "`N/A`"}\`ms`)

    message.channel.send({ embeds: [embed] });
};
module.exports.help = {
    name: "ping",
    aliases: [""]
};