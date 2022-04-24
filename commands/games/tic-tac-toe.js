const { TicTacToe } = require('djs-games')
const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args,prefix) => {
    const opponent = message.mentions.users.first();
    if (!opponent) return message.channel.send(`Please mention who you want to challenge at tictactoe.`);
    
    const game = new TicTacToe({
      message: message,
      opponent: opponent,
      xEmoji: '❌', // The Emote for X
      oEmoji: '0️⃣', // The Emote for O
      xColor: 'PRIMARY',
      oColor: 'PRIMARY', // The Color for O
      embedDescription: 'Tic Tac Toe', // The Description of the embed
    })
    game.start()
};

module.exports.help = {
    name: "tic-tac-toe",
    aliases: ["ttt"]
};