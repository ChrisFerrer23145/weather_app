let key = 'Xyeq6GQbJG4zxQm69wlli50G6XipQlE2';

let getWeather = async (id) => {
  
  let base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  let query = `${id}?apikey=${key}`;

  let response = await fetch(base + query);
  let data = await response.json();

  return data[0];

};


let getCity = async (city) => {

  let base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  let query = `?apikey=${key}&q=${city}`;

  let response = await fetch(base + query);
  let data = await response.json();

  return data[0];

};