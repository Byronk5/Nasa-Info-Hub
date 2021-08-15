const distanceText = document.getElementById("distance");
const reset = document.getElementById("reset");
const earth = document.getElementById("earth-info");
const planetName = document.getElementById("planet-name");
const planet = document.getElementById("body-info");
const planetText = document.getElementById("body-text");
const planetImage = document.getElementById("body-image");
const planetSelect = document.getElementById("celestial-bodies");
const celestialBodiesArray = [
  {
    title: "Sun",
    size: "109x Larger than Earth",
    distance: 149,
    moons: 0,
  },
  {
    title: "Mercury",
    size: "Earth is 2.6x Larger than Mercury",
    distance: 91,
    moons: 0,
  },
  {
    title: "Venus",
    size: "Earth is 1.1x Larger than Venus",
    distance: 41,
    moons: 0,
  },
  {
    title: "Mars",
    size: "Earth is 1.9x Larger than Mars",
    distance: 78,
    moons: 2,
  },
  {
    title: "Jupiter",
    size: "11x Larger than Earth",
    distance: 628,
    moons: 79,
  },
  {
    title: "Saturn",
    size: "9.1x Larger than Earth",
    distance: 1275,
    moons: 53,
  },
  {
    title: "Uranus",
    size: "4x Larger than Earth",
    distance: 2723,
    moons: 27,
  },
  {
    title: "Neptune",
    size: "3.9x Larger than Earth",
    distance: 4351,
    moons: 14,
  },
];

planetSelect.addEventListener("change", () => {
  const selectedValue = planetSelect.value;
  sunSelect(selectedValue);
  mercurySelect(selectedValue);
  venusSelect(selectedValue);
  marsSelect(selectedValue);
  jupiterSelect(selectedValue);
  saturnSelect(selectedValue);
  uranusSelect(selectedValue);
  neptuneSelect(selectedValue);
  animationStart();
  scrollDown();
});

reset.addEventListener("click", () => {
  animationClear();
});
// function still runs when selecting another planet
function calculateDistance(planetDistance) {
  let distance = 0;
  let interval = setInterval(() => {
    distanceCounter();
  }, 10);

  function distanceCounter() {
    distance++;
    if (distance === planetDistance) {
      clearInterval(interval);
    }

    distanceText.innerText = `Average Distance from Earth: ${distance} Million Kilometers`;
  }
}

function scrollDown() {
  distanceText.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}

function animationStart() {
  planet.classList.add("body-animation");
  planetSelect.disabled = true;
  planetImage.style.visibility = "visible";
  distanceText.style.visibility = "visible";
  planetText.style.visibility = "visible";
  planetName.style.visibility = "visible";
}

function animationClear() {
  planet.classList.remove("body-animation");
  planetSelect.disabled = false;
  planetImage.style.visibility = "hidden";
  distanceText.style.visibility = "hidden";
  planetText.style.visibility = "hidden";
  planetName.style.visibility = "hidden";
}

function sunSelect(selectedValue) {
  const sunDistance = celestialBodiesArray[0].distance;
  if (selectedValue == "sun") {
    calculateDistance(sunDistance);
    planetImage.src = "img/sun.png";
    planetName.innerHTML = `<h2>${celestialBodiesArray[0].title}<h2>`;
    planetText.innerHTML = `<ul><li>Size:${celestialBodiesArray[0].size}</li><li>Distance:${celestialBodiesArray[0].distance} Million Kms</li><li>Moons:${celestialBodiesArray[0].moons}</li></ul>`;
  }
}

function mercurySelect(selectedValue) {
  const mercuryDistance = celestialBodiesArray[1].distance;
  if (selectedValue == "mercury") {
    calculateDistance(mercuryDistance);
    planetImage.src = "img/mercury.png";
    planetName.innerHTML = `<h2>${celestialBodiesArray[1].title}<h2>`;
    planetText.innerHTML = `<ul><li>Size:${celestialBodiesArray[1].size}</li><li>Distance:${celestialBodiesArray[1].distance} Million Kms</li><li>Moons:${celestialBodiesArray[1].moons}</li></ul>`;
  }
}

function venusSelect(selectedValue) {
  const venusDistance = celestialBodiesArray[2].distance;
  if (selectedValue == "venus") {
    calculateDistance(venusDistance);
    planetImage.src = "img/venus.png";
    planetName.innerHTML = `<h2>${celestialBodiesArray[2].title}<h2>`;
    planetText.innerHTML = `<ul><li>Size:${celestialBodiesArray[2].size}</li><li>Distance:${celestialBodiesArray[2].distance} Million Kms</li><li>Moons:${celestialBodiesArray[2].moons}</li></ul>`;
  }
}

function marsSelect(selectedValue) {
  const marsDistance = celestialBodiesArray[3].distance;
  if (selectedValue == "mars") {
    calculateDistance(marsDistance);
    planetImage.src = "img/mars.png";
    planetName.innerHTML = `<h2>${celestialBodiesArray[3].title}<h2>`;
    planetText.innerHTML = `<ul><li>Size:${celestialBodiesArray[2].size}</li><li>Distance:${celestialBodiesArray[3].distance} Million Kms</li><li>Moons:${celestialBodiesArray[3].moons}</li></ul>`;
  }
}

function jupiterSelect(selectedValue) {
  const jupiterDistance = celestialBodiesArray[4].distance;
  if (selectedValue == "jupiter") {
    calculateDistance(jupiterDistance);
    planetImage.src = "img/jupiter.png";
    planet.classList.add("body-animation");
    planetName.innerHTML = `<h2>${celestialBodiesArray[4].title}<h2>`;
    planetText.innerHTML = `<ul><li>Size:${celestialBodiesArray[4].size}</li><li>Distance:${celestialBodiesArray[4].distance} Million Kms</li><li>Moons:${celestialBodiesArray[4].moons}</li></ul>`;
  }
}

function saturnSelect(selectedValue) {
  const saturnDistance = celestialBodiesArray[5].distance;
  if (selectedValue == "saturn") {
    calculateDistance(saturnDistance);
    planetImage.src = "img/saturn.png";
    planet.classList.add("body-animation");
    planetName.innerHTML = `<h2>${celestialBodiesArray[5].title}<h2>`;
    planetText.innerHTML = `<ul><li>Size:${celestialBodiesArray[5].size}</li><li>Distance:${celestialBodiesArray[5].distance} Million Kms</li><li>Moons:${celestialBodiesArray[5].moons}</li></ul>`;
  }
}
function uranusSelect(selectedValue) {
  const uranusDistance = celestialBodiesArray[6].distance;
  if (selectedValue == "uranus") {
    calculateDistance(uranusDistance);
    planetImage.src = "img/uranus.png";
    planet.classList.add("body-animation");
    planetName.innerHTML = `<h2>${celestialBodiesArray[6].title}<h2>`;
    planetText.innerHTML = `<ul><li>Size:${celestialBodiesArray[6].size}</li><li>Distance:${celestialBodiesArray[6].distance} Million Kms</li><li>Moons:${celestialBodiesArray[6].moons}</li></ul>`;
  }
}

function neptuneSelect(selectedValue) {
  const neptuneDistance = celestialBodiesArray[7].distance;
  if (selectedValue == "neptune") {
    calculateDistance(neptuneDistance);
    planetImage.src = "img/neptune.png";
    planet.classList.add("body-animation");
    planetName.innerHTML = `<h2>${celestialBodiesArray[7].title}<h2>`;
    planetText.innerHTML = `<ul><li>Size:${celestialBodiesArray[7].size}</li><li>Distance:${celestialBodiesArray[7].distance} Million Kms</li><li>Moons:${celestialBodiesArray[7].moons}</li></ul>`;
  }
}

// Mobile Menu
const menu = document
  .getElementById("mobile-menu")
  .addEventListener("click", () => {
    const nav = document.querySelector(".mobile-links");
    nav.classList.toggle("mobile-menu-active");
  });
