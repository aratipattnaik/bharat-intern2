const search=document.querySelector(".search_type")
const BUtton = document.querySelector("button")
const weather = document.querySelector(".center")
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0fa9ebae3cmsh524a1994e11af3ap13953ajsn63f83424600e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
// console.log(search);
const geweather = async(city)=>{
    const response =  await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
    // console.log(response)
    const data = await response.json()
    // console.log(data);
    return showweather(data);
}
const showweather = (data)=>{
    // console.log(data);
    weather.innerHTML =`
            <img src="weather-ios-logo-png-transparent.png" alt="">
            <h1 class="temp" style="color: white;">${data.temp}</h1>
            <h1 class="city" style="color: white;">${search.value}</h1>    `
}
let data= BUtton.addEventListener(
    "click",function(evt){
        evt.preventDefault();
        geweather(search.value);
    }
)