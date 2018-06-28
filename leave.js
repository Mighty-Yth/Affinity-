exports.run = (client, message) => {
	if (message.author.id ==="364157241772867596") {
  
   let guild = message.guild;
        guild.leave()
		.then(guild=> console.log(`I left ${guild.name}`))
			message.delete()

        .catch(console.error);
	};
	
	}
	exports.conf = {
		enabled: true,
		guildOnly: false,
		permLevel: 'Bot Admin'
	};
	
	exports.help = {
		name: 'leave',
	};