const apiURL = "http://localhost:8080/api/topics";
var axios = require('axios');

function haeAiheet(callback) {
    return axios.get(apiURL)
        .then(function (lista) {
            callback(lista.data);
        })
};

export {haeAiheet}