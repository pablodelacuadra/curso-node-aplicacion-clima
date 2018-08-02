const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLon(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `La temperatura en ${ coors.direccion } es de ${ temp }°`;
    } catch (error) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }


}


getInfo(argv.direccion)
    .then((msje) => {
        console.log(msje);
    })
    .catch((err) => {
        console.log(err);
    })