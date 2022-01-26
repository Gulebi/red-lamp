const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    if(!args.length) {
        message.channel.send("Укажите текст");
        return; 
    }
    
    const dict = {
        "A" : "𝒜", "a" : "𝒶",
        "B" : "ℬ", "b" : "𝒷",
        "C" : "𝒞", "c" : "𝒸",
        "D" : "𝒟", "d" : "𝒹",
        "E" : "ℰ", "e" : "𝑒",
        "F" : "ℱ", "f" : "𝒻",
        "G" : "𝒢", "g" : "𝑔",
        "H" : "ℋ", "h" : "𝒽",
        "I" : "ℐ", "i" : "𝒾",
        "J" : "𝒥", "j" : "𝒿",
        "K" : "𝒦", "k" : "𝓀",
        "L" : "ℒ", "l" : "𝓁",
        "M" : "ℳ", "m" : "𝓂",
        "N" : "𝒩", "n" : "𝓃",
        "O" : "𝒪", "o" : "𝑜",
        "P" : "𝒫", "p" : "𝓅",
        "Q" : "𝒬", "q" : "𝓆",
        "R" : "ℛ", "r" : "𝓇",
        "S" : "𝒮", "s" : "𝓈",
        "T" : "𝒯", "t" : "𝓉",
        "U" : "𝒰", "u" : "𝓊",
        "V" : "𝒱", "v" : "𝓋",
        "W" : "𝒲", "w" : "𝓌",
        "X" : "𝒳", "x" : "𝓍",
        "Y" : "𝒴", "y" : "𝓎",
        "Z" : "𝒵", "z" : "𝓏"
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
    name: "script"
};