module.exports.run = async(client,message,args) => {
    let msg = await message.channel.send("Dont rush me you homo.")


    await message.channel.send({files: [
        {
            attachment: target.displayAvatarURL,
            name: "avatar.png"
        }
    ]});


}

module.exports.help = {
    name:"avatar"

}