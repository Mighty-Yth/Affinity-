const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    let user = message.author
    const embed = new Discord.RichEmbed()
    .setTitle('Moderating noises')
    .addField('the prefix is',' !!')
    .addField('prune<number>','-it deletes the ammount of messeges stated in <number>-')
    .addField('dm <@user>','-this makes the bot dm the user stated, it requires the LMAO role-')
    .addField('mute<@user>','-mutes user, it needs mannage message perms-')
    .addField('umute<@user>','-unmutes user, it requires mannage message perms-')
    .addField('ban<@user><reason>','-bans users , it requires you to have the ban member permission-')
    .addField('kick<@user><reason>', '-kicks user, it requires kick members perms-')
    .setFooter("do not include the <>")
    .setColor('#DFC305')    

    
    message.channel.send(embed)

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 'user'
};

exports.help = {
    name: 'help3'
};