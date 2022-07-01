const Discord = module.require("discord.js");
const fs = require("fs");

const { User } = require("discord.js");
const { createWriteStream } = require("node:fs");
// const prism = require('prism-media');
const { pipeline } = require("node:stream");

const opus = require("@discordjs/opus");

const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource,
    entersState,
    EndBehaviorType,
    VoiceReceiver,
    StreamType,
    AudioPlayerStatus,
    VoiceConnectionStatus,
    AudioReceiveStream,
} = require("@discordjs/voice");

const player = createAudioPlayer();

module.exports.run = async (client, message, args) => {
    // const channel = message.member?.voice.channel;
    // if(!channel) return message.channel.send('Join a VC first!');
    // const connection = joinVoiceChannel({
    //     channelId: channel.id,
    //     guildId: channel.guild.id,
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
    // const user_Id = message.author.id
    // const user = message.author
    // const opusStream = connection.receiver.subscribe(user_Id, {
    //     end: {
    //         behavior: EndBehaviorType.AfterSilence,
    //         duration: 100,
    //     },
    // });
    // const oggStream = new prism.opus.OggLogicalBitstream({
    //     opusHead: new prism.opus.OpusHead({
    //         channelCount: 2,
    //         sampleRate: 48000,
    //     }),
    //     pageSizeControl: {
    //         maxPackets: 10,
    //     },
    // });
    // const filename = `../recordings/${Date.now()}-${getDisplayName(user_Id, user)}.ogg`;
    // const out = createWriteStream(filename);
    // console.log(`👂 Started recording ${filename}`);
    // pipeline(opusStream, oggStream, out, (err) => {
    //     if (err) {
    //         console.warn(`❌ Error recording file ${filename} - ${err.message}`);
    //     } else {
    //         console.log(`✅ Recorded ${filename}`);
    //     }
    // });
};

module.exports.help = {
    name: "record2",
    aliases: ["rec2"],
};
