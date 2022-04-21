const Discord = require("discord.js");
const fs = require("fs");

const { Player, QueryType, QueueRepeatMode } = require("discord-player");

module.exports.run = async (client,message,args,prefix,player) => {
    const queue = player.getQueue(message.guildId);
    if (!queue || !queue.playing) return void message.reply("❌ | No music is being played!");
    const paused = queue.setPaused(false);
    if (!paused) {
        message.reply("❌ | Something went wrong!")
    } else {
        message.reply("▶ | Resumed!")
    }
};

module.exports.help = {
    name: "resume",
    // aliases: [""]
};