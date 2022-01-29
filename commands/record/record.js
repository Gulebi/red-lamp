const Discord = module.require("discord.js");
const fs = require("fs");

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

module.exports.run = async (client,message,args) => {
    // const channel = message.member?.voice.channel;
    // if(!channel) return message.channel.send('Join a VC first!');

    // channel.guild.me.edit({deaf:false})

    // const connection = joinVoiceChannel({
	//     channelId: channel.id,
	//     guildId: channel.guild.id,
    //   selfDeaf: false,
    //   selfMute: false,
	//     adapterCreator: channel.guild.voiceAdapterCreator,
    // });

    // try {
	// 	await entersState(connection, VoiceConnectionStatus.Ready, 30e3);
    //     connection.subscribe(player);
    //     await message.reply('Successfully connected!');
	// } catch (error) {
	// 	connection.destroy();
	// 	throw error;
	// }

    // const receiver = VoiceReceiver

    // const rec = connection.receiver.subscribe(message.member, {
    //     mode: "pcm",
    //     end: "silence"
    // });


    // var d = new Date()
    // const dd = d.toLocaleTimeString()
    // let rawRecName = `C:/Users/glebu/Project/red-lamp/recordings/raw/rawRecording.pcm`
    
    // let newRecName = `./recordings/end/${dd}newRecording.mp3`


    // const writer = rec.pipe(fs.createWriteStream(rawRecName));
    // writer.on('finish', () => {
    //   channel.leave();
    //   message.channel.send('It went quiet, so I left...');
    //   ffmpegconvert(rawRecName, newRecName)

    // });
};

module.exports.help = {
    name: "record",
    aliases: ["rec"]
};