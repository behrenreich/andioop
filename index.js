const Discord = require('discord.js');

const client = new Discord.Client();
client.login('NjM0NTM3MTI1ODYxMTMwMjQw.Xaj-cQ.LeP2mL9PmajqMiMQt5JU0-pQ_V8
');

client.on('ready', () => console.log('I am ready!'));

client.on('message', msg => {
    if (msg.content === '@𝓢𝓴𝓮𝓵𝓮𝓽𝓲𝓽𝓪𝓷#4847') {
        return msg.reply('@𝓢𝓴𝓮𝓵𝓮𝓽𝓲𝓽𝓪𝓷#4847');
    }
});
