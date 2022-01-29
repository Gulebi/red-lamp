const Discord = module.require("discord.js");
const fs = require("fs");
const mongo = require('../mongo')
const setPrefixCmdSchema = require('./schemas/set-prefix-cmd-schema')

const cmdTrigger = require('../cmd-trigger')

module.exports.run = async (client,message,args) => {
    if (message.member.permissions.has('MANAGE_GUILD')){
        await mongo().then(async mongoose => {
            try {
                const guildId = message.guild.id
                const prefix = args.toString()  
    
                await setPrefixCmdSchema.findByIdAndUpdate(
                    {
                        _id: guildId,
                    },
                    {
                        _id: guildId,
                        prefix: prefix,
                    },
                    {
                        upsert: true,
                    }
                )
    
                message.reply(`Префикс был изменён на ${prefix}`)

                cmdTrigger.updateCache(guildId, prefix)
            } finally {
                mongoose.connection.close()
            }
        })
    }else {
        message.reply(`${message.author.username}, вы не имеете прав на эту команду!`)
    }
};

module.exports.help = {
    name: "setprefix",
    aliases: ["sp"]
};