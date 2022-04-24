const { SnakeGame } = require('djs-games')
const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args,prefix) => {
    const game = new SnakeGame({
      message: message,
      buttons: true, // If you want to use buttons || False if you want to use reactions
      board: '⬜',
      snake: '🟩',
      apple: '🍎',
      embedColor: 'RANDOM',
      leftButton: '⬅',
      rightButton: '➡',
      upButton: '⬆',
      downButton: '⬇',
    })
    game.start()
};

module.exports.help = {
    name: "snake",
    // aliases: [""]
};