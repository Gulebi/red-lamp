const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {

	if (message.member.permissions.has('MANAGE_MESSAGES')){
		const num = Number.parseInt(args, 10)
        
	    message.delete(100);
        for (let i = 0; i <= num; i++) {
            message.channel.send('Бебра!');
        }
	}else {
		message.reply(`${message.author.username}, вы не имеете прав на эту команду!`)
	}
};

module.exports.help = {
    name: "bebra"
};