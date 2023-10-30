const axios = require('axios');

const KEY = "c2cc8080c2365e0bc78252b80ce17f5c"
const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c2cc8080c2365e0bc78252b80ce17f5c`

async function getWether(time) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&exclude=hourly${time}&units=metric&APPID=c2cc8080c2365e0bc78252b80ce17f5c`);

        return response.data.main;
    } catch (error) {
        console.error(error);
    }
}
async function getWind(time) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&units=metric&APPID=c2cc8080c2365e0bc78252b80ce17f5c`);

        return response.data.wind;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getWether,
    getWind
}