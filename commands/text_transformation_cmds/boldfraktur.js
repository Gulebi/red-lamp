const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    if(!args.length) {
        message.channel.send("Укажите текст");
        return; 
    }
    
    const dict = {
        "A" : "𝕬", "a" : "𝖆",
        "B" : "𝕭", "b" : "𝖇",
        "C" : "𝕮", "c" : "𝖈",
        "D" : "𝕯", "d" : "𝖉",
        "E" : "𝕰", "e" : "𝖊",
        "F" : "𝕱", "f" : "𝖋",
        "G" : "𝕲", "g" : "𝖌",
        "H" : "𝕳", "h" : "𝖍",
        "I" : "𝕴", "i" : "𝖎",
        "J" : "𝕵", "j" : "𝖏",
        "K" : "𝕶", "k" : "𝖐",
        "L" : "𝕷", "l" : "𝖑",
        "M" : "𝕸", "m" : "𝖒",
        "N" : "𝕹", "n" : "𝖓",
        "O" : "𝕺", "o" : "𝖔",
        "P" : "𝕻", "p" : "𝖕",
        "Q" : "𝕼", "q" : "𝖖",
        "R" : "𝕽", "r" : "𝖗",
        "S" : "𝕾", "s" : "𝖘",
        "T" : "𝕿", "t" : "𝖙",
        "U" : "𝖀", "u" : "𝖚",
        "V" : "𝖁", "v" : "𝖛",
        "W" : "𝖂", "w" : "𝖜",
        "X" : "𝖃", "x" : "𝖝",
        "Y" : "𝖄", "y" : "𝖞",
        "Z" : "𝖅", "z" : "𝖟"
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
    name: "boldfraktur"
};