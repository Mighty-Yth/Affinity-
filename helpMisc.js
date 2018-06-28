const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    let user = message.author
    const embed = new Discord.RichEmbed()
    .setTitle(' miscellaneous stuff no one will probably use')
    .addField('the prefix is',' !!')
    .addField('first<@user>','-shows the first time you saw someone-')
    .addField('avatar<@user>','-enlarges the picture of the user mentioned or self-')
    .addField('info<@user>','-shows the information of the user mentioned or self-')
    .addField('server','-shows server info-')
    .addField('ping','-bot respond- ')
    .setFooter("do not include the <>")
    .setColor('#2F807C')    

    
    message.channel.send(embed)

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 'user'
};

exports.help = {
    name: 'help1'
};