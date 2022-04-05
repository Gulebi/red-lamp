const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    if(!args.length) {
        message.reply({ files: [{
            attachment: "./ben_voice/talking-ben-saying-ben.mp3",
            name: "ben.mp3"}]
        });
        return; 
    }

    const responses = [
        "./ben_voice/talking-ben-saying-yes.mp3",
        "./ben_voice/talking-ben-saying-no.mp3",
        "./ben_voice/talking-ben-laughing.mp3",
        "./ben_voice/talking-ben-saying-ugh.mp3"
    ];
    const ResponsePath = responses[Math.floor(Math.random()*(responses.length))];
    message.reply({ files: [{
        attachment: ResponsePath,
        name: "ben.mp3"}]
    });
};

module.exports.help = {
    name: "ben",
    aliases: ["🐶", "🐕"]
};