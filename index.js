require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () =>{
  console.log('GenL (public) is now online') //THIS WILL SHOW IN CONSOLE WHEN YOUR BOT IS READY
  client.user.setPresence({ game: { name: `${client.guilds.size} Servers`, type: "WATCHING"}}); //YOUR DISCORD BOT ACTIVITY
});



client.on('message', async msg => {
  switch (msg.content) {
    case ".test":  //HERE IS COMMAND
      msg.author.send('Made by Cyxum - test'); //BOT WILL REPLY IN DM'S
      msg.reply("test"); //BOT WILL REPLY IN CHAT
      break;
    }
})

client.login(process.env.CLIENT_TOKEN);