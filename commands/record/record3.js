const Discord = module.require("discord.js");
const fs = require("fs");

const { createReadStream, createWriteStream } = require('fs');
const { join } = require('path');

const ffmpeg = require('ffmpeg');

// function ffmpegconvert(rawRecName, newRecName) {
//     try {
//         var process = new ffmpeg(rawRecName);
//         process.then(function (audio) {
//           audio.fnExtractSoundToMP3(newRecName, function (error, file) {
//             if (!error) console.log('Audio File: ' + file);
//           });
//         }, function (err) {
//           console.log('Error: ' + err);
//       });
//     } catch (e) {
//         console.log(e);
//     }
// }

const {
	joinVoiceChannel,
	createAudioPlayer,
	createAudioResource,
	entersState,
    VoiceReceiver,
	StreamType,
	AudioPlayerStatus,
	VoiceConnectionStatus,
    AudioReceiveStream,
} = require('@discordjs/voice');

const player = createAudioPlayer();

module.exports.run = async (client,message,args) => {
    const channel = message.member?.voice.channel;
    if(!channel) return message.channel.send('Join a VC first!');

    channel.guild.me.edit({deaf:false})

    const connection = joinVoiceChannel({
	    channelId: channel.id,
	    guildId: channel.guild.id,
        selfDeaf: false,
        selfMute: false,
	    adapterCreator: channel.guild.voiceAdapterCreator,
    });

    try {
		await entersState(connection, VoiceConnectionStatus.Ready, 30e3);
        connection.subscribe(player);
        await message.reply('Successfully connected!');
	} catch (error) {
		connection.destroy();
		throw error;
	}


    const rec = connection.receiver.subscribe(message.member.id)

    const filename = `${Date.now()}-${message.member.id}`;

    const writer = rec.pipe(createWriteStream(join('C:/Users/glebu/Project/red-lamp/recordings', `${filename}.pcm`)))

    // let newRecName = `C:/Users/glebu/Project/red-lamp/recordings/end/${Date.now()}newRecording.mp3`

    // function delay(time) {
    //     return new Promise(resolve => setTimeout(resolve, time));
    // }

    // delay(10000).then(() => ffmpegconvert(`C:/Users/glebu/Project/red-lamp/recordings/${filename}.pcm`, newRecName))

    // writer.on('finish', () => {
    //     channel.leave();
    //     message.channel.send('It went quiet, so I left...');
    // });

    // var toWav = require('audiobuffer-to-wav')
    // var wav = toWav(rec)

    // const wavwriter = wav.pipe(createWriteStream(join('C:/Users/glebu/Project/red-lamp/recordings', `${filename}.wav`)))
};

module.exports.help = {
    name: "record3",
    aliases: ["rec3"]
};
