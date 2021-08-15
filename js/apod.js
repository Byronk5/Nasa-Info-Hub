const title = document.getElementById("daily-title");
const content = document.getElementById("daily-content");
const image = document.getElementById("daily-image");
const date = document.getElementById("date");

async function getImageData() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
  );
  const imageData = await response.json();

  return imageData;
}

getImageData().then((data) => {
  console.log(data);
  date.textContent = data.date;
  title.textContent = data.title;
  content.textContent = data.explanation;
  image.innerHTML = `<img src="${data.url}" class="daily-image-styling">`;
});

// Mobile Menu
const menu = document
  .getElementById("mobile-menu")
  .addEventListener("click", () => {
    const nav = document.querySelector(".mobile-links");
    nav.classList.toggle("mobile-menu-active");
  });
