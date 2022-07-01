require("dotenv").config();
const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    message.reply(`Current bot version is : ${process.env.VER}`);
};

module.exports.help = {
    name: "version",
    aliases: ["ver"],
};
