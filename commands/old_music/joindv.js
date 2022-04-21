const Discord = require("discord.js");
const fs = require("fs");

const {
	joinVoiceChannel,
	createAudioPlayer,
	createAudioResource,
	entersState,
	StreamType,
	AudioPlayerStatus,
	VoiceConnectionStatus,
} = require('@discordjs/voice');

const player = createAudioPlayer();

module.exports.run = async (client,message,args,prefix) => {
    const channel = message.member?.voice.channel;


    const connection = joinVoiceChannel({
	    channelId: channel.id,
	    guildId: channel.guild.id,
	    adapterCreator: channel.guild.voiceAdapterCreator,
    });

    try {
		await entersState(connection, VoiceConnectionStatus.Ready, 30e3);
        connection.subscribe(player);
        await message.reply('Sucsess!');
	} catch (error) {
		connection.destroy();
		throw error;
	}
};

module.exports.help = {
    name: "joindv",
	// aliases: [""]
};