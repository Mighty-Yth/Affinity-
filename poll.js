const Discord = require('discord.js');
module.exports.run = async(client,message,args) => {

    var list_A=['useless element','🇦','🇧','🇨','🇩','🇪','🇫','🇬','🇭','🇮','🇯','🇰','🇱','🇲','🇳','🇴','🇵','🇶','🇷','🇸','🇹','🇺','🇻','🇼','🇽','🇾','🇿']
    const question= args.join(" ");
    var poll_items = question.split("|")
    if(!question ) return message.reply("please add a poll list like this ```!!poll<question|option 1 |option 2|...> dont include <>```" );
    //console.log(question);         
    //console.log(poll_items);
    //console.log(list_A.length)
    //console.log(poll_items.length)

    
    //message.channel.send(list_A[1] + poll_items[1] ) this is what I want for the poll format although it might take a while to figure out 
    let completed_Poll = ' '
    for(i=1; i < poll_items.length ;i=i+1){   //add a +1 to poll_items since poll_items[0] is the question of the poll

        completed_Poll +=list_A[i]+"   "+poll_items[i]+'\n'+ "  ";        

    };
    let msg = await message.channel.send(`:scroll:**${poll_items[0]}**\n ${completed_Poll}`);
    
    try{
    reaction = ' '
    for(j=1; j < poll_items.length ; j=j+1){

        reaction += await msg.react(list_A[j])


    }}
    catch(err){
        message.channel.send(` \`\`\`${err}\`\`\` `) 
    };


    

   
    

    
   
    

     };

module.exports.help = {
    name:"poll"

}
