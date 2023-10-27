const TelegramBot = require('node-telegram-bot-api');

const { Command } = require("commander");

const program = new Command();

program
    .option("--send-message --message <text>", "Send text")
    .option("--send-photo --photo <text>", "Send photo")

program.parse(process.argv);

const options = program.opts();
const bot = new TelegramBot("6792456329:AAHEtD-Ser1eOamOzAA_9VePijk2atqDWwM", { polling: false });

async function botTelegram(options) {
    if (options.message !== undefined) {
        bot.sendMessage(802771051, options.message);
    }
    else if (options.photo) {

        bot.sendPhoto(802771051, options.photo);
    }
    else {
        console.log(options);
        return console.log("Unknown action type!");
    }
}

botTelegram(options)