const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    if(!args.length) {
        message.channel.send("Укажите текст");
        return; 
    }
    
    const dict = {
        "A" : "🇦",
        "B" : "🇧",
        "C" : "🇨",
        "D" : "🇩",
        "E" : "🇪",
        "F" : "🇫",
        "G" : "🇬",
        "H" : "🇭",
        "I" : "🇮",
        "J" : "🇯",
        "K" : "🇰",
        "L" : "🇱",
        "M" : "🇲",
        "N" : "🇳",
        "O" : "🇴",
        "P" : "🇵",
        "Q" : "🇶",
        "R" : "🇷",
        "S" : "🇸",
        "T" : "🇹",
        "U" : "🇺",
        "V" : "🇻",
        "W" : "🇼",
        "X" : "🇽",
        "Y" : "🇾",
        "Z" : "🇿"
    }

    const input = args.toString().toLocaleUpperCase().split("")
    const output = []

    for (let i = 0; i < input.length; i++) {
        output.push(dict[input[i]])
    }
    
    message.channel.send(output.join(" "))
};

module.exports.help = {
    name: "emojify"
};