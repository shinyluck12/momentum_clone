const images = ["0.jpg", "1.png", "2.jpg", "3.png", "4.jpg", "5.jpg", "6.jpg"];

const nctImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${nctImages}`;

document.body.appendChild(bgImage);
