const { Client, Intents } = require('discord.js')
const config = require('./config.js')

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS
    // Intents.FLAGS
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

//command prefix
const prefix = config.prefix

//funny penguin new member message
client.on('guildMemberAdd', member => {
  console.log('s')
  client.channels.cache.get(config.welcomeChannel).send(`Welcome to SLUG, <@${member.id}>!\nhttps://tenor.com/view/penguins-dance-cool-moves-funny-gif-15070731`)
})

client.login(config.token)