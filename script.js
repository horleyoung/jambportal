
const images = ['url("image/4.jpg")', 'url("image/3.jpg")'];

let currentImageIndex = 0;

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.body.style.backgroundImage = images[currentImageIndex];
    document.body.style.backgroundSize = "cover"; 
    document.body.style.backgroundPosition = "center";
}
setInterval(changeBackgroundImage, 5000);
