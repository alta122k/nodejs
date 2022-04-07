var http = require('http');

const axios = require('axios')

const weather = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a34b43fed32570748015e0f643bb8f7c&query='+address
    console.log(url)



    axios
    .get(url)
    .then(res => {
      callback(undefined, {
        longitude: res.data.current,
        location: res.data.location
    })
    })
    .catch(error => {
        console.error(error)
    })



    // var request = http.request(url, function (res) {
    //     var data = '';
    //     res.on('data', function (chunk) {
    //         data += chunk;
    //     });
    //     res.on('end', function () {
    //         console.log(data.features);
    //         if (data.features) {
    //             callback('Unable to find location. Try another search.', undefined)
    //         }
    //         else {
    //             callback(undefined, {
    //                 latitude: data.features[0].center[1],
    //                 longitude: data.features[0].center[0],
    //                 location: data.features[0].place_name
    //             })
    //         }

    //     });
    // });
    // request.on('error', function (e) {
    //     console.log(e.message);
    //     callback('Unable to connect to location services!', undefined)
    // });

    // request.end();





    // request({ url, json: true }, (error,{features}) => {
    //     console.log(features)
    //     if (error) {
    //         
    //     } else 
    //     } 
    // })
}

module.exports = weather