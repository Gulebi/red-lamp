const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    if(!args.length) {
        message.channel.send("Укажите текст");
        return; 
    }
    
    const dict = {
        "A" : "𝓐", "a" : "𝓪",
        "B" : "𝓑", "b" : "𝓫",
        "C" : "𝓒", "c" : "𝓬",
        "D" : "𝓓", "d" : "𝓭",
        "E" : "𝓔", "e" : "𝓮",
        "F" : "𝓕", "f" : "𝓯",
        "G" : "𝓖", "g" : "𝓰",
        "H" : "𝓗", "h" : "𝓱",
        "I" : "𝓘", "i" : "𝓲",
        "J" : "𝓙", "j" : "𝓳",
        "K" : "𝓚", "k" : "𝓴",
        "L" : "𝓛", "l" : "𝓵",
        "M" : "𝓜", "m" : "𝓶",
        "N" : "𝓝", "n" : "𝓷",
        "O" : "𝓞", "o" : "𝓸",
        "P" : "𝓟", "p" : "𝓹",
        "Q" : "𝓠", "q" : "𝓺",
        "R" : "𝓡", "r" : "𝓻",
        "S" : "𝓢", "s" : "𝓼",
        "T" : "𝓣", "t" : "𝓽",
        "U" : "𝓤", "u" : "𝓾",
        "V" : "𝓥", "v" : "𝓿",
        "W" : "𝓦", "w" : "𝔀",
        "X" : "𝓧", "x" : "𝔁",
        "Y" : "𝓨", "y" : "𝔂",
        "Z" : "𝓩", "z" : "𝔃"
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
    name: "boldscript",
    aliases: [""]
};