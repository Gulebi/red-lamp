const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
	if(!args.length) {
        message.channel.send("Укажите число сообщений");
        return; 
    }

    const { member, channel } = message

	if (message.member.permissions.has('MANAGE_MESSAGES')){
		const num = Number.parseInt(args, 10)

	    message.delete(100);
        channel.bulkDelete(num);
	} else {
		message.reply(`${message.author.username}, вы не имеете прав на эту команду!`)
	}
};

module.exports.help = {
    name: "clear"
};