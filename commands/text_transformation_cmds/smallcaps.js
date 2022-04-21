const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    if(!args.length) {
        message.channel.send("Укажите текст");
        return; 
    }
    
    const dict = {
        "A" : "ᴀ",
        "B" : "ʙ",
        "C" : "ᴄ",
        "D" : "ᴅ",
        "E" : "ᴇ",
        "F" : "ꜰ",
        "G" : "ɢ",
        "H" : "ʜ",
        "I" : "ɪ",
        "J" : "ᴊ",
        "K" : "ᴋ",
        "L" : "ʟ",
        "M" : "ᴍ",
        "N" : "ɴ",
        "O" : "ᴏ",
        "P" : "ᴘ",
        "Q" : "Q",
        "R" : "ʀ",
        "S" : "ꜱ",
        "T" : "ᴛ",
        "U" : "ᴜ",
        "V" : "ᴠ",
        "W" : "ᴡ",
        "X" : "X",
        "Y" : "ʏ",
        "Z" : "ᴢ"
    }
    
    const input = args.join(" ").toString().toLocaleUpperCase().split("")
    const output = []

    for (let i = 0; i < input.length; i++) {
        if (dict[input[i]] == undefined) {
            output.push(input[i])
        } else {
            output.push(dict[input[i]])
        }
    }
    
    message.channel.send(output.join(""))
};

module.exports.help = {
    name: "smallcaps",
    // aliases: [""]
};