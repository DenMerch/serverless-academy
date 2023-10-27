const TelegramBot = require('node-telegram-bot-api');

const { Command } = require("commander");


const program = new Command();
// const { TELEGRAM_BOT_TOKEN } = process.env.TELEGRAM_BOT_TOKEN.trim();
program
    .option("-m --message <text>", "Send text")
    .option("-p --photo <type>", "Send photo")


program.parse(process.argv);

const options = program.opts();
const bot = new TelegramBot("6792456329:AAHEtD-Ser1eOamOzAA_9VePijk2atqDWwM", { polling: false });



async function botTelegram(options) {

    if (options.message !== undefined) {
        console.log(options.message);
        bot.sendMessage(802771051, options.message);
    }
    else if (options.photo) {
        bot.sendPhoto(802771051, options.photo);
    }
    else {
        return console.log("Unknown action type!");
    }

}

botTelegram(options)