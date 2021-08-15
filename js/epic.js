let date = document.getElementById("date");
const earthImage = document.getElementById("earth-image");

const loader = document.getElementById("loader");

const submit = document
  .getElementById("submit")
  .addEventListener("click", (e) => {
    async function epicData() {
      loaderActive();
      setTimeout(() => {
        window.scrollTo(0, 1000);
      }, 5000);
      const url = `https://api.nasa.gov/EPIC/api/natural/date/${date.value}?api_key=DEMO_KEY`;
      if (date.value < "2015-08-31") {
        alert("Please enter a vaild date");
      }
      const response = await fetch(url);
      const imageData = response.json();
      return imageData;
    }

    epicData().then((dataResponse) => {
      const caption = document.getElementById("caption");
      const imageId = dataResponse[0].image;
      caption.textContent = dataResponse[0].caption;

      async function epicImage() {
        let dateArray = date.value.split("-");
        let year = dateArray[0];
        let month = dateArray[1];
        let day = dateArray[2];
        const imageUrl = `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${imageId}.png?api_key=DEMO_KEY`;
        const response = await fetch(imageUrl);
        const image = response.blob();
        return image;
      }

      epicImage().then((data) => {
        console.log(data);
        earthImage.innerHTML = `<img src=${URL.createObjectURL(data)}>`;
      });
    });

    e.preventDefault();
  });

function loaderActive() {
  loader.classList.add("loading");
}

// Mobile Menu
const menu = document
  .getElementById("mobile-menu")
  .addEventListener("click", () => {
    const nav = document.querySelector(".mobile-links");
    nav.classList.toggle("mobile-menu-active");
  });
