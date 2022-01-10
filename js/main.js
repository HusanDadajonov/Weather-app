const myKey = "39a9a737b07b4b703e3d1cd1e231eedc";
let bool = true;
document.querySelector(".box__form").addEventListener("submit", (e)=> {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector(".box__inp").value}&appid=${myKey}&units=metric`).then(req => {
        if(req.status == 404){
            bool = false;
            document.querySelector(".box__inp").value = "";
            return alert("XATOLIK");
        }
        else bool = true;return req.json();
      }).then(data => (bool == true) ? document.querySelector(".box").innerHTML += `<div class="box__weather"><h2 class="box__country">${data.name}</h2><p class="box__info">${data.weather[0].description}</p><ul class="box__list"><li class="box__item"><p class="box__desc">speed</p> <span class="box__count">${data.wind.speed}</span></li><li class="box__item"><p class="box__desc">deg</p> <span class="box__count">${data.wind.deg}</span></li><li class="box__item"><p class="box__desc">gust</p> <span class="box__count">${data.wind.gust}</span></li><li class="box__item"><p class="box__desc">temp</p> <span class="box__count">${Math.round(data.main.temp)} C</span></li><li class="box__item"><p class="box__desc">humidity</p> <span class="box__count">${data.main.humidity}</span></li><li class="box__item"><p class="box__desc">pressure</p> <span class="box__count">${data.main.pressure}</span></li></ul></div>` : "");
})
