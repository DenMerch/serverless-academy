const TelegramBot = require('node-telegram-bot-api');
const { getWether, getWind } = require('./getWether')
const { getExchange } = require('./getExchange.js')


const bot = new TelegramBot("6792456329:AAHEtD-Ser1eOamOzAA_9VePijk2atqDWwM", { polling: true });

bot.on("message", async (msg) => {
    let wether = null
    let wetherText = null
    let data = null
    switch (msg.text) {
        case '/start':
            bot.sendMessage(msg.chat.id, "Welcome", {
                reply_markup: {
                    keyboard: [["Погода", "Курс валют"]],
                },
            });
            break;
        case "Погода":
            bot.sendMessage(msg.chat.id, "Погода", {
                reply_markup: {
                    keyboard: [["Кожні 3 години", "Кожні 6 годин"], ["Вітер"], ["Попереднє меню"]],
                },
            });
            break;
        case "Кожні 3 години":
            wether = await getWether(3)
            wetherText = `Temp.: ${wether.temp}, feels like: ${wether.feels_like},
                                    pressure: ${wether.pressure}, humidity: ${wether.humidity}`
            bot.sendMessage(msg.chat.id, wetherText);
            break;
        case "Кожні 6 годин":
            wether = await getWether(6)
            wetherText = `Temp.: ${wether.temp}, feels like: ${wether.feels_like},
                                    pressure: ${wether.pressure}, humidity: ${wether.humidity}`
            bot.sendMessage(msg.chat.id, wetherText);
            break;
        case "Вітер":
            wether = await getWind()
            wetherText = `Швидкість: ${wether.speed}, порив: ${wether.gust}`
            bot.sendMessage(msg.chat.id, wetherText);
            break;
        case "Попереднє меню":
            bot.sendMessage(msg.chat.id, "Welcome", {
                reply_markup: {
                    keyboard: [["Погода", "Курс валют"]],
                },
            });
            break;
        case "Курс валют":
            bot.sendMessage(msg.chat.id, "Курс валют", {
                reply_markup: {
                    keyboard: [["USD", "EUR"], ["Попереднє меню"]],
                },
            });
            break;
        case "USD":
            data = await getExchange()
            let usdExchange = data.data.find(element => element.ccy === "USD");
            bot.sendMessage(msg.chat.id, `Продаж: ${usdExchange.sale}, купівля: ${usdExchange.buy}`);
            break;
        case "EUR":
            data = await getExchange()
            let eurExchange = data.data.find(element => element.ccy === "EUR")
            bot.sendMessage(msg.chat.id, `Продаж: ${eurExchange.sale}, купівля: ${eurExchange.buy}`);
            break;

        default:
            break;
    }
});
