const { RockPaperScissors } = require('djs-games')
const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args,prefix) => {
    const game = new RockPaperScissors({
        message: message,
      })
      game.start()
};

module.exports.help = {
    name: "rock-paper-scissors",
    aliases: ["rps"]
};