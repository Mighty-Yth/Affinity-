const Discord = require('discord.js');

module.exports.run = async (bot,message,args) => {
		let user = message.mentions.users.first() || message.author || client.user.get(args[0]);
		let guildUser = message.mentions.members.first() || message.member;
     
        message.channel.send(`This was me the first time i saw ${user}'s ugly ass `,{files:["./CRUST/firsttime.png"]});
}

module.exports.help = {
    name:"first"
}