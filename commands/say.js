const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {

	if (message.member.permissions.has('MANAGE_MESSAGES')){
		const msg = args.join(" "); // Считываем то, что хотим отправить!
	    message.delete(100);
		message.channel.send(msg);
		console.log(`Пользователь ${message.author.username} отправил через say: ${msg}`); // Пишем в консоль о том, что кто-то написал сообщение через бота)
	}else {
		message.reply(`${message.author.username}, вы не имеете прав на эту команду!`)
	}
};

module.exports.help = {
    name: "say"
};