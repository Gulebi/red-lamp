const Discord = module.require("discord.js");
const fs = require("fs");

const paginationEmbed = require("../../paginationEmbed");

module.exports.run = async (client, message, args, prefix, player) => {
    const embed1 = new Discord.MessageEmbed().setColor("#4188D2").setTitle("Список команд:").setDescription("Категория: utility").addFields(
        { name: "!avatar [@ник учасника]", value: "Отправляет аватар учасника", inline: true },
        // { name: '!emojify [текст]', value: 'Преобразовывает введённый текст в эмодзи', inline: true },
        { name: "!help", value: "Отправляет список команд бота", inline: true },
        { name: "!ping", value: "Отправляет пинг между вами и ботом", inline: true },
        { name: "!poll [вариант1] [вариант2]", value: "Создаёт опрос", inline: true },
        { name: "!random [число от] [число до]", value: "Генерирует случайное число в заданном диапазоне", inline: true },
        { name: "!say [текст]", value: "Отправляет заданный текст", inline: true },
        { name: "!temp [место]", value: "Показывает погоду в введённом месте", inline: true }
    );
    // .addField('Страница:', '1 / 5')
    // .setTimestamp()
    // .setFooter({ text: 'red-lamp bot', iconURL: 'https://i.imgur.com/0PCQtit.png' });

    const embed2 = new Discord.MessageEmbed()
        .setColor("#4188D2")
        .setTitle("Список команд:")
        .setDescription("Категория: music")
        .addFields(
            { name: "!disconnect", value: "Отключает бота от голосового канала", inline: true },
            { name: "!loop", value: "Включает режим повтора", inline: true },
            { name: "!pause", value: "Ставит плеер на паузу", inline: true },
            { name: "!play [ссылка или название]", value: "Ищет и включает указанный трек", inline: true },
            { name: "!playd", value: 'Тоже, что и команда "!play", но работает с большим кол-вом сайтов', inline: true },
            { name: "!resume", value: "Убирает бота с паузы", inline: true },
            { name: "!skip", value: "Пропускает текущий трек", inline: true }
        );
    // .addField('Страница:', '2 / 5')
    // .setTimestamp()
    // .setFooter({ text: 'red-lamp bot', iconURL: 'https://i.imgur.com/0PCQtit.png' });

    const embed3 = new Discord.MessageEmbed()
        .setColor("#4188D2")
        .setTitle("Список команд:")
        .setDescription("Категория: audio effects")
        .addFields(
            { name: "!8D", value: "Применяет эффект на трек", inline: true },
            { name: "!bassboost", value: "Применяет эффект на трек", inline: true },
            { name: "!chipmunk", value: "Применяет эффект на трек", inline: true },
            { name: "!earrape", value: "Применяет эффект на трек", inline: true },
            { name: "!haas", value: "Применяет эффект на трек", inline: true },
            { name: "!karaoke", value: "Применяет эффект на трек", inline: true },
            { name: "!nightcore", value: "Применяет эффект на трек", inline: true },
            { name: "!reverse", value: "Применяет эффект на трек", inline: true },
            { name: "!vaporwave", value: "Применяет эффект на трек", inline: true }
        );
    // .addField('Страница:', '3 / 5')
    // .setTimestamp()
    // .setFooter({ text: 'red-lamp bot', iconURL: 'https://i.imgur.com/0PCQtit.png' });

    const embed4 = new Discord.MessageEmbed()
        .setColor("#4188D2")
        .setTitle("Список команд:")
        .setDescription("Категория: fun")
        .addFields(
            { name: "!8ball (вопрос)", value: "Генерирует фразу шара предсказаний", inline: true },
            { name: "!coinflip (вопрос)", value: "Подбрасывает монетку", inline: true },
            { name: "!roll", value: "Подбрасывает игральную кость", inline: true },
            { name: "!rps [выбор]", value: 'Игра "Камень, Ножницы, Бумага" с ботом', inline: true }
        );
    // .addField('Страница:', '4 / 5')
    // .setTimestamp()
    // .setFooter({ text: 'red-lamp bot', iconURL: 'https://i.imgur.com/0PCQtit.png' });

    const embed5 = new Discord.MessageEmbed()
        .setColor("#4188D2")
        .setTitle("Список команд:")
        .setDescription("Категория: moderation")
        .addFields(
            { name: "!clear [кол-во]", value: "Удаляет введённое кол-во сообщений", inline: true },
            { name: "!setprefix [новый префикс]", value: "Обновляет префикс для бота на этом севере", inline: true },
            { name: '!schedule [Отметить канал] [ГГГГ/ММ/ДД] [ЧЧ:ММ] ["AM" or "PM"] [Временная зона]', value: "Отправляет сообщение по расписанию", inline: true }
        );
    // .addField('Страница:', '5 / 5')
    // .setTimestamp()
    // .setFooter({ text: 'red-lamp bot', iconURL: 'https://i.imgur.com/0PCQtit.png' });

    // message.channel.send({ embeds: [embed1] });

    pages = [embed1, embed2, embed3, embed4, embed5];

    paginationEmbed(message, pages);
};

module.exports.help = {
    name: "dhelp",
    aliases: ["dh"],
};
