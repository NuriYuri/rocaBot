const Discord = require('discord.js');
//const config = require('./config.json');

const accessSDK = require('./commands/accessSDK');
const addPSP = require('./commands/addPSP');
const adviceService = require('./commands/advice/advice-service');

var bot = new Discord.Client({
    autorun: true
})

bot.on('message', function(message) {

    if (message.author == bot.user.id) {
        return;
    }

    accessSDK.parse(message);

    if (message.content.substring(0, 1) == '!') {
        let args = message.content.substring(1).split(' ');
        const subargs = args.splice(1);

        switch (args[0]) {
            case 'addPSP':
            case 'addpsp':
                addPSP.parse(message);
                break;
            case 'howto':
            case 'hwt':
            case 'advice':
                adviceService.action(message, subargs);
                break;
        }
    }
});

// For Dev local
// bot.login(config.token).then(
bot.login(process.env.BOT_TOKEN).then(
    console.log('Ready')
);