import '../../src/bootstrap.min.css'
require('./index.css');
const{Store} =require('./Store');
const {Weather}= require('./Weather');
const {UI} = require('./UI');

const store=new Store();
const {city,countryCode} =store.getLocationData();
const ui=new UI();
const weather =new Weather(city, countryCode)

async function fetchWeather(){
   const data= await weather.getWeather();
   ui.render(data);
}
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
        const city =document.getElementById('city').value;
        const countryCode= document.getElementById('countryCode').value;
        weather.setLocation(city,countryCode);
        store.setLocationData(city,countryCode);
        fetchWeather();
        e.preventDefault();
});
document.addEventListener('DOMContentLoaded',fetchWeather)