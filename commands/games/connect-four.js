const { ConnectFour } = require('djs-games')
const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args,prefix) => {
    const game = new ConnectFour({
        message: message,
        player1: '🔴',
        player2: '🟡',
      })
      game.start()
};

module.exports.help = {
    name: "connect-four",
    aliases: ["cf-g"]
};