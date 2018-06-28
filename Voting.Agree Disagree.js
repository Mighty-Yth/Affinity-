const Discord = require('discord.js');
module.exports.run = async(client,message,args) => {
     let object = args.join(" ");
     let file = message.attachments.first().url; 
    if(!object) return message.channel.send("Provide something to vote for or a picture","do you want to add a picture?")
     await message.content
        if(message.content === "yes") return message.channel.send(embed1)
        if(message.content ==="no")return message.channel.send(embed2)
    
    
    //message.channel.send("do you want vote for a picture? respond with yes or no ")
        //.then(
           // message.delete()
       // )
    
    const embed1 = new Discord.RichEmbed()
	.setTitle(`Vote Once `)
    .setDescription(":white_check_mark:=> agree, :eight_spoked_asterisk:=> neutral, :negative_squared_cross_mark:=> disagree" )
    .addField('What do you think?', object)
    .setFooter(` ${message.guild.member(message.author).displayName} want's to know your response`, message.author.avatarURL)
    .setColor("#5A1A10")

    const embed2 = new Discord.RichEmbed()
	.setTitle(`Vote Once `)
    .setDescription(":white_check_mark:=> agree, :eight_spoked_asterisk:=> neutral, :negative_squared_cross_mark:=> disagree" )
    .addField('What do you think?', object)
    .setImage( file)
    .setFooter(` ${message.guild.member(message.author).displayName} want's to know your response`, message.author.avatarURL)
    .setColor("#5A1A10");
    

   //if(file) return message.channel.send("do you want to send a picture?")
        //await message.content
           // if(!message.content === "yes" ) return message.channel.send(embed2)
           // if(!message.content === "no") return message.chanel.send(embed1)
    
        
    
    let msg = await message.channel.send(embed2 );
    await msg.react('✅');
    await msg.react('✳');
    await msg.react('❎');


}

module.exports.help = {
    name:"voteA"

}

