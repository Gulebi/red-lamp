const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    if(!args.length) {
        message.channel.send("Укажите текст");
        return; 
    }
    
    const dict = {
        "A" : "Ａ", "a" : "ａ",
        "B" : "Ｂ", "b" : "ｂ",
        "C" : "Ｃ", "c" : "ｃ",
        "D" : "Ｄ", "d" : "ｄ",
        "E" : "Ｅ", "e" : "ｅ",
        "F" : "Ｆ", "f" : "ｆ",
        "G" : "Ｇ", "g" : "ｇ",
        "H" : "Ｈ", "h" : "ｈ",
        "I" : "Ｉ", "i" : "ｉ",
        "J" : "Ｊ", "j" : "ｊ",
        "K" : "Ｋ", "k" : "ｋ",
        "L" : "Ｌ", "l" : "ｌ",
        "M" : "Ｍ", "m" : "ｍ",
        "N" : "Ｎ", "n" : "ｎ",
        "O" : "Ｏ", "o" : "ｏ",
        "P" : "Ｐ", "p" : "ｐ",
        "Q" : "Ｑ", "q" : "ｑ",
        "R" : "Ｒ", "r" : "ｒ",
        "S" : "Ｓ", "s" : "ｓ",
        "T" : "Ｔ", "t" : "ｔ",
        "U" : "Ｕ", "u" : "ｕ",
        "V" : "Ｖ", "v" : "ｖ",
        "W" : "Ｗ", "w" : "ｗ",
        "X" : "Ｘ", "x" : "ｘ",
        "Y" : "Ｙ", "y" : "ｙ",
        "Z" : "Ｚ", "z" : "ｚ"
    }

    const input = args.join(" ").toString().split("")
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
    name: "fullwidth",
    // aliases: [""]
};