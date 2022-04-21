const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    try {
        if(!args.length) {
            message.channel.send("Укажите место");
            return; 
        }
    
        const msg = args.join(" "); // Считываем то, что хотим отправить!
        message.delete(100);
        message.channel.send(`**${message.author.tag}** спрашивает: ${msg}`).then(sentMsg => {
            sentMsg.react("👍")
            sentMsg.react("👎")
        })
    } catch (err) {
        message.reply('Произошли технические шлколадки! Попробуйте позже.')
        return console.log(err);
    }
};

module.exports.help = {
    name: "poll",
    // aliases: [""]
};