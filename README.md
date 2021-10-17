# slug-bot
Stevens Linux Users Group Discord Bot used in our public server. This bot is made in [Node.js](https://nodejs.org/en/) using the [discord.js](https://discord.js.org/#/) library to interface with Discord's API.

## Setup
In order to setup the bot, make sure that you have Node.js and npm installed on your system. Clone the repository to your local machine, and open a terminal window in the folder. Running the command `npm i` will automatically install any necessary Node.js packages. Copy the `configExample.js` file, and rename it to `config.js`. The new file can be modified for your testing purposes, and it's changes will not be reflected in your commits. On the [Discord Developer Portal](https://discord.com/developers/applications), log into your Discord account and click on the "New Application" button at the top right of the page, give it a name, and click on "Create". On the left side of the window click on "Bot" under the settings list, then click on "Add Bot" on the right side of the page, and then confirm. Under the bot's username, there will be a "Token" section. Click on the copy button to copy your bot's token, and paste it into the `"token": ""` section of `config.js`.

Once the above has been done, you can start the bot by running the command `node bot.js`. In order to use/test the bot, it must be invited to a Discord server. It is recommended to make a new/empty server for testing purposes. You can invite the bot to your server by navigating to the following link, replacing CLIENT_ID with the client ID of your bot, which can be found on the "General Information" under the settings link on the left of the page: `https://discord.com/oauth2/authorize?client_id=CLIENT_ID&scope=bot&permissions=8`

The bot should now be ready to use in your server. Under no circumstance should you ever make your bot's token public. If you do so by mistake, you can click on the regenerate button to make a new token.

## Contributing
If you would like to contribute to the project, please do so by making a Pull Request. Pull requests should include
- A brief description of what was changed
- References to any issues that may of been solved
