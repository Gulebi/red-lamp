const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    if(!args.length) {
        message.channel.send("Укажите текст");
        return; 
    }
    
    const dict = {
        "A" : "𝔄", "a" : "𝔞",
        "B" : "𝔅", "b" : "𝔟",
        "C" : "ℭ", "c" : "𝔠",
        "D" : "𝔇", "d" : "𝔡",
        "E" : "𝔈", "e" : "𝔢",
        "F" : "𝔉", "f" : "𝔣",
        "G" : "𝔊", "g" : "𝔤",
        "H" : "ℌ", "h" : "𝔥",
        "I" : "ℑ", "i" : "𝔦",
        "J" : "𝔍", "j" : "𝔧",
        "K" : "𝔎", "k" : "𝔨",
        "L" : "𝔏", "l" : "𝔩",
        "M" : "𝔐", "m" : "𝔪",
        "N" : "𝔑", "n" : "𝔫",
        "O" : "𝔒", "o" : "𝔬",
        "P" : "𝔓", "p" : "𝔭",
        "Q" : "𝔔", "q" : "𝔮",
        "R" : "ℜ", "r" : "𝔯",
        "S" : "𝔖", "s" : "𝔰",
        "T" : "𝔗", "t" : "𝔱",
        "U" : "𝔘", "u" : "𝔲",
        "V" : "𝔙", "v" : "𝔳",
        "W" : "𝔚", "w" : "𝔴",
        "X" : "𝔛", "x" : "𝔵",
        "Y" : "𝔜", "y" : "𝔶",
        "Z" : "ℨ", "z" : "𝔷"
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
    name: "fraktur",
    // aliases: [""]
};