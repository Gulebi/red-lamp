const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args,prefix) => {

	const exampleEmbed = new Discord.MessageEmbed() // Создаём наш эмбэд
		.setColor('#43e2f7') // Цвет нашего сообщения
		.setTitle('Приветик :>') // Название эмбэд сообщения
		.setAuthor(message.guild.name) // Автором будет название сервера
		.setDescription(':^Мы любим вас!^:') // комментарий
		.setTimestamp() // Дата  отправки сообщения
		.setFooter('Ваш бот Bot © 2021'');

	message.channel.send(exampleEmbed); // Отправляем сообщение

};
module.exports.help = {
    name: "hi" // Название команды
};