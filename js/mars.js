const roverImages = document.getElementById("rover-images");
const roverSelect = document.getElementById("rovers");
const solNumber = document.getElementById("sol-number");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

async function getRoverImageData() {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverSelect.value}/photos?sol=${solNumber.value}&api_key=DEMO_KEY`;
  const response = await fetch(url);
  const imageData = response.json();
  return imageData;
}

submit.addEventListener("click", (e) => {
  getRoverImageData().then((roverData) => {
    const array = roverData.photos;
    if (array.length >= 10) {
      let imageArray = array.slice(0, 21);
      displayImages(imageArray);
      console.log(imageArray);
    } else if (array.length == 0) {
      alert("No images were taken on this Martian Sol!");
    } else if (array.length < 10 || array.length > 0) {
      const smallerImageArray = array.slice(0, array.length);
      displayImages(smallerImageArray);
    }
    submit.disabled = true;
    submit.classList.add("btn-disabled");

    scroll();
    e.preventDefault();
  });
});

function displayImages(imageArray) {
  createImageElement(imageArray);
}

function createImageElement(imageArray) {
  for (let i = 0; i < imageArray.length; i++) {
    const imagesDiv = document.createElement("div");
    imagesDiv.innerHTML = `<p>Rover:${imageArray[i].rover.name}</p><p>Sol:${imageArray[i].sol}</p><p>Camera:${imageArray[i].camera.full_name}</p>`;
    imagesDiv.classList.add("text-center");
    let img = document.createElement("img");
    img.src = imageArray[i].img_src;
    imagesDiv.appendChild(img);
    roverImages.appendChild(imagesDiv);
    resetImages(imagesDiv, imageArray);
  }
}

function resetImages(imagesDiv, imageArray) {
  reset.addEventListener("click", (e) => {
    if (imageArray.length == 0) {
      return;
    } else {
      solNumber.value = "";
      imagesDiv.remove();
      submit.disabled = false;
      submit.classList.remove("btn-disabled");
    }

    e.preventDefault();
  });
}

function scroll() {
  roverImages.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}

// Weather Service
const weatherInfo = document.getElementById("weather-info");
const weatherUrl = `https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`;
async function getWeatherData() {
  const response = await fetch(weatherUrl);
  const weatherData = response.json();
  return weatherData;
}

getWeatherData().then((marsWeatherData) => {
  console.log(marsWeatherData);
  createWeatherTable(marsWeatherData);
});

function createWeatherTable(marsWeatherData) {
  const sol_1 = document.querySelector(".sol-1");
  const sol_2 = document.querySelector(".sol-2");
  const sol_3 = document.querySelector(".sol-3");
  const sol_4 = document.querySelector(".sol-4");

  const firstSolKey = marsWeatherData.sol_keys[0];
  const secondSolKey = marsWeatherData.sol_keys[1];
  const thirdSolKey = marsWeatherData.sol_keys[2];

  sol_1.innerHTML = ` <td>${marsWeatherData[`${firstSolKey}`].First_UTC}</td>
  <td>${marsWeatherData.sol_keys[0]}</td>
  <td>${marsWeatherData[`${firstSolKey}`].PRE.av}</td><td>${
    marsWeatherData[`${firstSolKey}`].PRE.mn
  }</td><td>${marsWeatherData[`${firstSolKey}`].PRE.mx}</td>`;

  sol_2.innerHTML = ` <td>${marsWeatherData[`${secondSolKey}`].First_UTC}</td>
  <td>${marsWeatherData.sol_keys[1]}</td>
  <td>${marsWeatherData[`${secondSolKey}`].PRE.av}</td><td>${
    marsWeatherData[`${secondSolKey}`].PRE.mn
  }</td><td>${marsWeatherData[`${secondSolKey}`].PRE.mx}</td>`;

  sol_3.innerHTML = ` <td>${marsWeatherData[`${thirdSolKey}`].First_UTC}</td>
  <td>${marsWeatherData.sol_keys[2]}</td>
  <td>${marsWeatherData[`${thirdSolKey}`].PRE.av}</td><td>${
    marsWeatherData[`${thirdSolKey}`].PRE.mn
  }</td><td>${marsWeatherData[`${thirdSolKey}`].PRE.mx}</td>`;

  sol_4.innerHTML = ` <td>${marsWeatherData["845"].First_UTC}</td>
  <td>${marsWeatherData.sol_keys[3]}</td>
  <td>${marsWeatherData["845"].PRE.av}</td><td>${marsWeatherData["845"].PRE.mn}</td><td>${marsWeatherData["845"].PRE.mx}</td>`;
}

// Mobile Menu
const menu = document
  .getElementById("mobile-menu")
  .addEventListener("click", () => {
    const nav = document.querySelector(".mobile-links");
    nav.classList.toggle("mobile-menu-active");
  });
