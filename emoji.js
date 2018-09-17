module.exports.run = async (client,message,args) => {
    
    let attach = message.attachments.first();
    let object = args.join()
    if(!message.member.hasPermission('MANAGE_EMOJIS')) return message.reply('you need the manage emojis perm to do this ');
    if(!attach) return message.reply("please add a picture to emojify")
    if(!object) return message.reply("please add a name ")
    await message.guild.createEmoji(attach.url, object)
        .then(message.react('410546786588033054'))
        .catch(e => { message.channel.send(`${e} `) })
        

    
       


    
};

module.exports.help = {
name:"emoji"
}



