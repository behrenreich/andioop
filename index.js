const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NjM0NTM3MTI1ODYxMTMwMjQw.XakFkA.P3mXkHRnkVcc5ALO7FI0qXn8Qz4'; // Token goes here.
 
client.login(token); // login the bot with your token.
 
client.on('message', message => { // This is where we will 

if (message.content === 'hmmm') {
	message.react('🤔');
  }
});

const { Client, RichEmbed } = require('discord.js');

client.on('message', message => {

if (message.content === 'titanudes') { 
  message.channel.send('You thought you little perv lol')
}

if (message.content === 'serverinfo') {
	message.channel.send(`>>> **Server Name:** ${message.guild.name}\n**Total Members:** ${message.guild.memberCount}\n**Server ID:** ${message.guild.id}\n**Server Owner:** ${message.guild.owner}\n**Server Size:** ${client.guilds.size}\n**Total Channels:** ${client.channels.size}`);
}

if (message.content === 'userinfo') {
	message.channel.send(`>>> **Your username:** ${message.author.username}\n**Your ID:** ${message.author.id}`);
}

  if (message.content === 'commands') {

const exampleEmbed = new Discord.RichEmbed()
	.setColor('#fc7f03')
	.setTitle('**__Commands__**')
	.setAuthor('ping titan lol', 'https://media.discordapp.net/attachments/540987901912285204/634899946855727125/-0.jpg?width=101&height=120')
	.setDescription('commands **Shows command menu**\nhmmm **Reacts with a 🤔**\nuserinfo **Shows User Info**\nserverinfo **Shows Server Info**\nmuteAll **Mutes everyone in Voice Channel**\nunmuteAll **Unmutes everyone in Voice Channel**')
	.setThumbnail('https://media.discordapp.net/attachments/540987901912285204/634974602359078973/-0.jpg?width=101&height=120')
	.addField('**__NSFW__**', 'titanudes **Shows nudes of me**')
	.setTimestamp()
	.setFooter('Made by Brandon Ehrenreich', 'https://media.discordapp.net/attachments/540987901912285204/634903799605100574/---97654.PNG?width=185&height=225');

message.channel.send(exampleEmbed);

  }
});

var interval = 40000;
var voicechannel = "633813272528683009";

var musicurl = "https://cdn.discordapp.com/attachments/540987901912285204/634985164518326272/Wii_Sports_-_Music_-_Boxing_Results.mp3";

client.on("ready", () => {
  const channel = client.channels.get(voicechannel);
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    console.log("Successfully connected.");
    connection.playArbitraryInput(musicurl);
    setInterval(function(){
    connection.playArbitraryInput(musicurl);
  }, interval);
  }).catch(e => {
    console.error(e);
  });
});

client.on('message', function(message) {
    // Now, you can use the message variable inside
    if (message.content === "pingtitan") { 
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send("<@597239233333166092>")
            .catch(console.error); // add error handling here
        }, 1 * 1000); 
    }
});

client.on('message', (message) => {
    if (message.content == 'muteAll') {
        let channel = message.member.voiceChannel;
        for (let member of channel.members) {
            member[1].setMute(true)
        }
     }
});

client.on('message', (message) => {
    if (message.content == 'unmuteAll') {
        let channel = message.member.voiceChannel;
        for (let member of channel.members) {
            member[1].setMute(false)
        }
     }
});

