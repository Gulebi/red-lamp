const Discord = require("discord.js");
const fs = require("fs");

const { Player, QueryType, QueueRepeatMode } = require("discord-player");

module.exports.run = async (client,message,args,prefix,player) => {
    const queue = player.getQueue(message.guildId);
    if (!queue || !queue.playing) return void message.reply("❌ | No music is being played!");
    
    // let loopMode = QueueRepeatMode.OFF;
    // if (loopMode === QueueRepeatMode.OFF) {
    //     loopMode === QueueRepeatMode.TRACK
    // } else if (loopMode === QueueRepeatMode.TRACK) {
    //     loopMode === QueueRepeatMode.QUEUE
    // } else if (loopMode === QueueRepeatMode.QUEUE) {
    //     loopMode === QueueRepeatMode.OFF
    // }
    let loopMode = QueueRepeatMode.OFF
    const loopModeInput = args[0].toLowerCase()
    switch (loopModeInput) {
        case 'none':  
            loopMode === QueueRepeatMode.OFF
            break;
        case 'one':
            loopMode === QueueRepeatMode.TRACK
            break;
        case 'queue':
            loopMode === QueueRepeatMode.QUEUE
            break;
        default:
            message.reply("Укажите вариант повтора")
    }

    const mode = loopMode
    const success = queue.setRepeatMode(loopMode);
    if (success) {
        message.reply(`${mode} | Updated loop mode!`)
    } else {
        message.reply("❌ | Could not update loop mode!")
    }
};

module.exports.conf = {
    // aliases: ['loop'],
    cooldown: "3"
}

module.exports.help = {
    name: "loop"
};