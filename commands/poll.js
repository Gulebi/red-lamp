const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {

	if (message.member.permissions.has('MANAGE_MESSAGES')){
		const msg = args.join(" "); // Считываем то, что хотим отправить!
	    message.delete(100);
		// message.channel.send(msg)
        // .react('👍')
        // .react('👎');
        message.channel.send(`**${message.author.tag}** спрашивает: ${msg}`).then(sentMsg => {
            sentMsg.react("👍")
            sentMsg.react("👎")
        })
	}else {
		message.reply(`${message.author.username}, вы не имеете прав на эту команду!`)
	}
};

module.exports.help = {
    name: "poll"
};