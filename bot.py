import discord
import os

client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_member_join(member):
    print("New member: " + member.name)
    joinchannel = member.guild.get_channel(880624848559308820)
    await joinchannel.send("Welcome to the server, " + member.mention + "!\nhttps://tenor.com/view/penguins-dance-cool-moves-funny-gif-15070731")

client.run(os.getenv("SLUG_DISCORD_API_KEY"))