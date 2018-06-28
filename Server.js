const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    let guild = message.guild;
    var channels = message.guild.channels.array(); 
    //var vChannels = message.guild.Voicechannels.array()
    //var roles = message.guild.roles.array();
    let emote = message.guild.emojis.map(e=>e.toString()).join(" ") || "none";
    if(message.guild.emojis.size >= 30) {
        emote = "Too many emotes to display"
    }
    var members = message.guild.members.array();
    let embed = new Discord.RichEmbed()
        .setAuthor(guild.name)
        .setDescription(`Here is ${guild.name}'s info!`)
        .addField('Guild Name', `${guild.name}`)
        .addField('server Owner',guild.owner,true)     
        .addField('Region', guild.region, true)
        .addField('Members', members.length, true)
        .addField('Created At', guild.createdAt, true)
        .addField('Emojis', emote, true)
        .setThumbnail(guild.iconURL)
        .setColor("#5A1B05");
    message.channel.send(embed);
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 'user'
};

exports.help = {
    name: 'server',
    
};