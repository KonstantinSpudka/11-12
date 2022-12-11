"use strict";

// fetch(
//   "https://api.open-meteo.com/v1/forecast?latitude=47.85&longitude=35.12&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=Europe%2FBerlin&start_date=2022-12-10&end_date=2022-12-10"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Підвантажити данні на сьогодні і вивести їх на сторінку

// fetch(
//   "https://api.open-meteo.com/v1/forecast?latitude=47.85&longitude=35.12&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=Europe%2FBerlin&start_date=2022-12-14&end_date=2022-12-14"
// )
//   .then((response) => response.json())
//   .then((data) => renderWeathe(data))
//   .catch((err) => console.log(err));

// function renderWeathe(weather) {
//   console.log(
//     "weather.dayly.temperature :>> ",
//     weather.daily.temperature_2m_max,
//     weather.daily.temperature_2m_min,
//     weather.daily.rain_sum
//   );

//   const rootDiv = document.getElementById("root");

//   const maxTempEl = document.createElement("div");
//   const minTempEl = document.createElement("div");

//   rootDiv.append(minTempEl, maxTempEl);

//   minTempEl.textContent = weather.daily.temperature_2m_min;
//   minTempEl.style.color = temperatureColor(weather.daily.temperature_2m_min);

//   maxTempEl.textContent = weather.daily.temperature_2m_max;
//   maxTempEl.style.color = temperatureColor(weather.daily.temperature_2m_max);
// }

// function temperatureColor(t) {
//   return t < 0 ? "blue" : t > 0 ? "green" : "black";
// }

// promise state
// 1 pending
// 2.1 fullfiled - result - then(result=>{})
// 2.2 rejected  - result - catch(error=>{})
//                                finale

// const promise = new Promise((resolve, reject) => {
//   resolve(5);
//   // reject(new Error("error!!!"));
// });

// promise
//   .then((data) => console.log("data :>> ", data))
//   .catch((e) => console.log("e :>> ", e));

// promise.then(
//   (data) => console.log("data :>> ", data),
//   (e) => console.log("e :>> ", e)
// );

// const sredCat = new Promise((res, rej) => {
//   if (Math.random() > 0.5) {
//     res("Your cat is alive)");
//   } else {
//     rej(new Error("You cat is unlacky("));
//   }
// });

// sredCat
//   .then((data) => console.log("data :>> ", data))
//   .catch((e) => console.log("e :>> ", e));

// // промысикувати setTimeout
// // setTimeout(cb.1000)
// // delay(1000).then(cb)

// function delay(ms) {
//   return new Promise((res, rej) => {
//     // if (ms < 0) {
//     //   rej(new RangeError("dalay mast be positive number"));
//     // }
//     setTimeout(res, ms);
//   });
// }

// setTimeout(() => console.log("1s go from timeout", 1000));
// delay(-1000).then(() => console.log("1s go"));

// загрузка изображения

const src = "https://klike.net/uploads/posts/2019-01/1547365376_1.jpg";
loadImage(src);

function loadImage(src) {
  const img = document.createElement("img");
  img.src = src;
  img.onload = function (e) {
    document.body.append(img);
  };
  img.onerror = function () {
    img.src = "./def.jpg";
  };
}

loadImage(src)
  .then((img) => {
    document.body.append(img);
  })
  .catch((img) => {
    img.src = "./def.jpg";
  });

function loadImage(src) {
  return new Promise((res, rej) => {
    const img = document.createElement("img");
    img.src = src;
    img.onload = () => {
      res(img);
    };
    img.onerror = () => {
      rej(img);
    };
  });
}
