const TelegramBot = require('node-telegram-bot-api');
const { getWether } = require('./getWether')



const bot = new TelegramBot("6792456329:AAHEtD-Ser1eOamOzAA_9VePijk2atqDWwM", { polling: true });

async function botTelegram() {

    const options1 = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Forecast in Kiev', callback_data: '1' }],

            ]
        })
    };
    const options2 = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'at intervals of 3 hours', callback_data: '2' }],
                [{ text: 'at intervals of 6 hours', callback_data: '3' }],

            ]
        })
    };
    bot.sendMessage(802771051, "Сhoose a city.", options1);
    bot.on('callback_query', function onCallbackQuery(callbackQuery) {
        const action = callbackQuery.data;
        const msg = callbackQuery.message;
        const opts = {
            chat_id: msg.chat.id,
            message_id: msg.message_id,
        };
        let text;

        if (action === '1') {
            bot.sendMessage(802771051, "Choose intervals.", options2);
            bot.on('callback_query', async function onCallbackQuery(callbackQuery) {
                const action = callbackQuery.data;
                const msg = callbackQuery.message;
                const opts = {
                    chat_id: msg.chat.id,
                    message_id: msg.message_id,
                };
                let text;

                if (action === '2') {
                    const wether = await getWether(3)
                    const wetherText = `Temp.: ${wether.temp}, feels like: ${wether.feels_like}, 
                    pressure: ${wether.pressure}, humidity: ${wether.humidity}`
                    bot.sendMessage(802771051, wetherText);

                }
                if (action === '3') {
                    const wether = await getWether(6)
                    const wetherText = `Temp.: ${wether.temp}, feels like: ${wether.feels_like}, 
                    pressure: ${wether.pressure}, humidity: ${wether.humidity}`
                    bot.sendMessage(802771051, wetherText);

                }

            });

        }

    });
}

botTelegram()