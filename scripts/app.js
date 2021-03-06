let cityForm = document.querySelector('form');
let card = document.querySelector('.card');
let details = document.querySelector('.details');
let time = document.querySelector('img.time');
let icon = document.querySelector('.icon img');

let updateUI = (data) => {
  let { cityDets, weather } = data;

  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);
  
  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSrc);


  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }
};

let updateCity = async (city) => {

  let cityDets = await getCity(city);
  let weather = await getWeather(cityDets.Key);
  return { cityDets, weather };

};

cityForm.addEventListener('submit', e => {

  e.preventDefault();
  

  let city = cityForm.city.value.trim();
  cityForm.reset();


  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});