const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NjM0NTM3MTI1ODYxMTMwMjQw.Xaj-cQ.LeP2mL9PmajqMiMQt5JU0-pQ_V8';
 
client.login(token);
 
client.on('message', message => {
 
    if(message.content.toLowerCase() === 'hello')
        message.channel.send("hi");
});
