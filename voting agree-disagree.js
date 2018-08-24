const Discord = require('discord.js');
module.exports.run = async(client,message,args) => {

    let object = args.join(" ");
    if(!object ) return message.reply("please add something to vote for dumbass" );
    const m = await message.channel.send('was a picture added when you called upon this command? ');
   
    const a1 = message => message.content.includes('no') && message.author.id == message.author.id ;
   
    
   
    const collector = message.channel.createMessageCollector(a1, { time: 10000 });
   
        collector.on('collect',async m => {
            
            const embed1 = new Discord.RichEmbed()
            .setTitle(`Vote Once `)
            .setDescription(":white_check_mark:=> agree, :eight_spoked_asterisk:=> neutral, :negative_squared_cross_mark:=> disagree" )
            .addField('What do you think?', object)
            .setFooter(` ${message.guild.member(message.author).displayName} want's to know your response`, message.author.avatarURL)
            .setColor("#5A1A10")

            let msg = await message.channel.send(embed1);
            await msg.react('✅');
            await msg.react('✳');
            await msg.react('❎');
 
    });

   
    collector.on('end', collected => {    ///this is for the no response
         

    });
    const a2 = message => message.content.includes('yes') && message.author.id == message.author.id ;
    let attach = message.attachments.first();
    const collector2 = message.channel.createMessageCollector(a2, { time: 10000 });
   
    collector2.on('collect',async m => {
       
        const embed2 = new Discord.RichEmbed()
        if(attach ){embed2.setImage(attach.url)
	embed2.setTitle(`Vote Once `)
    embed2.setDescription(":white_check_mark:=> agree, :eight_spoked_asterisk:=> neutral, :negative_squared_cross_mark:=> disagree" )
    embed2.addField('What do you think?', object)
    
    embed2.setFooter(` ${message.guild.member(message.author).displayName} want's to know your response`, message.author.avatarURL)
    embed2.setColor("#5A1A10");

        let msg = await message.channel.send(embed2);
        await msg.react('✅');
        await msg.react('✳');
        await msg.react('❎');

}});


collector2.on('end', collected => {    ///this is for the yes response
    //console.log(`Collected ${collected.size} yes `);

});


     }

module.exports.help = {
    name:"vote"

}