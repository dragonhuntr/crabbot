const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async message => {
    if (message.channel.id == '') {
        message.react('🦀')
    }
})

client.login('')
