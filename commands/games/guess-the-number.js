const { GuessTheNumber } = require('djs-games')
const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args,prefix) => {
    const game = new GuessTheNumber({
        message: message,
        wrongGuess: 'Wrong Guess!',
        correctGuess: 'Correct Guess!',
      })
      game.start()
};

module.exports.help = {
    name: "guess-the-number",
    aliases: ["gtn"]
};