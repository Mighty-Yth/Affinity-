 module.exports.run = async(client,message,args) => {
if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('you need the right to ban people my dude');
if (!args[0]) return message.channel.send("Ban a user by their ID. Use for people who are not currently in your server.");
    message.guild.ban(args[0]).then(() => {
        message.channel.send("Banning the ID `"+args[0]+"`")
        console.log("i have banned", args[0] )
    }).catch(err => {
        message.channel.send("The ID `"+args[0]+"` is not a valid user.");
    })
 }



module.exports.help = {
    name:"hackban"
}
    //hack ban verison one I believe 