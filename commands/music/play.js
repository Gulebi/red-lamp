const Discord = require("discord.js");
const fs = require("fs");

const { Player, QueryType, QueueRepeatMode } = require("discord-player");

module.exports.run = async (client,message,args,prefix,player) => {
    const query = args.join(' ') // проверить
    const searchResult = await player
        .search(query, {
            requestedBy: message.user,
            searchEngine: QueryType.AUTO
        })
        .catch(() => {});
    if (!searchResult || !searchResult.tracks.length) return message.reply("No results were found!");

    const queue = await player.createQueue(message.guild, {
        metadata: message.channel
    });

    queue.options.bufferingTimeout = 5000;
    // queue.options.onBeforeCreateStream();
    queue.options.leaveOnEnd = false;
    queue.options.leaveOnStop = false;
    queue.options.leaveOnEmpty = true;
    queue.options.leaveOnEmptyCooldown = 60 * 1000 * 3;

    try {
        if (!queue.connection) await queue.connect(message.member.voice.channel);
    } catch {
        void player.deleteQueue(message.guildId);
        return void message.reply("Could not join your voice channel!");
    }

    await message.reply(`⏱ | Загружаю твой ${searchResult.playlist ? "плейлист" : "трек"}...`);
    searchResult.playlist ? queue.addTracks(searchResult.tracks) : queue.addTrack(searchResult.tracks[0]);
    if (!queue.playing) await queue.play();
};

module.exports.help = {
    name: "play",
    aliases: ["p"]
};