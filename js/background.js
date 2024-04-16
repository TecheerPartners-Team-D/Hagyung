const images = [
    "1.png", "2.png", "3.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImages = document.createElement("img");

bgImages.src = `img/${chosenImage}`;

document.body.appendChild(bgImages);