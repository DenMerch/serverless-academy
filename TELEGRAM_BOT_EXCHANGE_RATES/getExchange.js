const axios = require('axios');

const URL = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"

async function getExchange() {
    try {
        const response = await axios.get(URL);

        return response;

    } catch (error) {
        console.log('this error');
        console.log(error);
    }
}

module.exports = {
    getExchange
}
