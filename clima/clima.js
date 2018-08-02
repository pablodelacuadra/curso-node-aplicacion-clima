const axios = require('axios');


const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&APPID=0ca95f5449201cb4d3e65a05b290f1ba`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}