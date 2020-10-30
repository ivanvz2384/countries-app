const fetch = require("node-fetch");

const END_POINT_URL = 'https://restcountries-v1.p.rapidapi.com/all';
const HEADER_VALUE_X_RAPIDAPI_HOST= 'restcountries-v1.p.rapidapi.com';
const HEADER_VALUE_X_RAPIDAPI_KEY= '0871ff6b55mshf102c72d59c1846p155960jsn5702bc875aa6';
const HEADER_VALUE_USE_QUERY_STRING=  true;

fetch(END_POINT_URL, {
    method: 'get',
    headers: {
        'x-rapidapi-host' : HEADER_VALUE_X_RAPIDAPI_HOST,
        'x-rapidapi-key' : HEADER_VALUE_X_RAPIDAPI_KEY,
        'useQueryString' : HEADER_VALUE_USE_QUERY_STRING
    }
})
.then(response => response.json())
.then(data => console.log(data));