module.exports.run = async(bot,message,args) => {
    let user = message.mentions.members.first() || message.author || client.user.get(args[0]);
    
    message.channel.send(`Good bye ${user},  we salute you!`, {files:["./CRUST/salute.png"]});
    
    
    };

module.exports.help = {
    name:"salute"

};