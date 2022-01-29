const Discord = require("discord.js");
const fs = require("fs");

const { Player, QueryType, QueueRepeatMode } = require("discord-player");

module.exports.run = async (client,message,args,prefix,player) => {
    const queue = player.getQueue(message.guildId);
    if (!queue || !queue.playing) return void message.reply("❌ | Музыка не воспроизводится!");

    const { member, guild } = message

    let loopMode = queue.repeatMode

    switch (loopMode) {
        case 0:  
            loopMode = QueueRepeatMode.TRACK
            loopModeStr = 'Трек'
            break;
        case 1:
            loopMode = QueueRepeatMode.QUEUE
            loopModeStr = 'Очередь'
            break;
        case 2:
            loopMode = QueueRepeatMode.OFF
            loopModeStr = 'Выключен'
            break;
    }

    const success = queue.setRepeatMode(loopMode);
    if (success) {
        message.reply(`Режим повтора изменён на | ${loopModeStr}`)
    } else {
        message.reply("❌ | Не удалось обновить режим повтора!")
    }
};

module.exports.help = {
    name: "loop",
    aliases: ["l"]
};