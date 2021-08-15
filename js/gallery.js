const gallery = document.getElementById("gallery");
const search = document.getElementById("search-input");
const submit = document.getElementById("submit");
const info = document.getElementById("info");
const reset = document.getElementById("reset");

// Fetch image data
async function getGalleryData() {
  const response = await fetch(
    `https://images-api.nasa.gov/search?q=${search.value}&media_type=image`
  );
  const galleryData = await response.json();
  return galleryData.collection;
}

submit.addEventListener("click", (e) => {
  getGalleryData().then((galleryImagesData) => {
    displayImages(galleryImagesData);
    submit.disabled = true;
    submit.classList.add("btn-disabled");

    e.preventDefault();
  });
});

function displayImages(galleryImagesData) {
  createImageElement(galleryImagesData);
}

// Fetch image url
async function getGalleryImage(imageUrl) {
  const response = await fetch(imageUrl);
  const galleryImage = await response.json();
  return galleryImage;
}

// Create image element
function createImageElement(galleryImagesData) {
  for (let i = 0; i < 25; i++) {
    const text = galleryImagesData.items[i].data;
    const title = text[0].title;
    const imageUrl = galleryImagesData.items[i].href;
    getGalleryImage(imageUrl).then((galleryImage) => {
      const imagesDiv = document.createElement("div");
      imagesDiv.classList.add("images-div");
      imagesDiv.innerHTML = `<h2>${title}<h2>`;
      let img = document.createElement("img");
      img.src = galleryImage[0];
      imagesDiv.appendChild(img);
      gallery.appendChild(imagesDiv);

      clearImages(imagesDiv);
    });
  }
}

// Clear images
function clearImages(imagesDiv) {
  reset.addEventListener("click", () => {
    search.value = "";
    imagesDiv.remove();
    submit.disabled = false;
    submit.classList.remove("btn-disabled");
  });
}

// Mobile Menu
const menu = document
  .getElementById("mobile-menu")
  .addEventListener("click", () => {
    const nav = document.querySelector(".mobile-links");
    nav.classList.toggle("mobile-menu-active");
  });
