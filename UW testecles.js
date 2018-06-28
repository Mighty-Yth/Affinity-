//this command is for testecleus only 

exports.run = async (client, message, args) => {
    message.channel.send ("https://discordapp.com/oauth2/authorize?client_id=455770647977525248&scope=bot&permissions=8")
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 'user'
};

exports.help = {
    name: 'invite'
    
};