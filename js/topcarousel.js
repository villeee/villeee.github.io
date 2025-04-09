document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  let fadeoutLength = 0.3;
  let fadeoutTime = 2;
  const images = document.querySelectorAll('#bg1, #bg2, #bg3, #bg4, #bg5');
  const totalImages = images.length;

  // Initialize z-index for images
  images.forEach((img, index) => {
    img.style.zIndex = totalImages - index;
  });

  // Set the initial z-index for the first image to be on top
  images[currentIndex].style.zIndex = totalImages;

  // Fadeout päällimmäinen kuva vaihdetaan
  setInterval(fadeoutImage, fadeoutTime * 1000);

  // Funktio, joka vaihtaa kuvia
  function fadeoutImage() {
    const currentImage = images[currentIndex];
    const nextIndex = (currentIndex + 1) % totalImages;
    const nextImage = images[nextIndex];

    currentImage.style.animation = `fadeOut ${fadeoutLength}s forwards`;
    currentImage.style.animationDelay = `${fadeoutTime}s`;

    currentImage.addEventListener('animationend', onAnimationEnd);

    function onAnimationEnd() {
      currentImage.style.animation = 'none'; // Poistetaan animaatio, jotta se voidaan asettaa uudelleen
      currentImage.style.zIndex = '1'; // Muutetaan z-index animaation jälkeen
      currentImage.removeEventListener('animationend', onAnimationEnd);

      // Päivitetään currentIndex seuraavaan kuvaan
      currentIndex = nextIndex;

      // Update z-index for all images
      images.forEach((img, index) => {
        if (index === currentIndex) {
          img.style.zIndex = totalImages; // Next image becomes the top one
          img.style.animation = 'none'; // Reset animation
        } else {
          img.style.zIndex =
            totalImages - ((index - currentIndex + totalImages) % totalImages); // Adjust z-index for other images
        }
      });

      // Ensure the next image is visible and on top
      nextImage.style.zIndex = totalImages;
      nextImage.style.animation = 'none'; // Reset animation
    }
  }
});

//window.onload = function () {
//  var startScreen = document.getElementById('start-screen');
//  startScreen.style.display = 'none';
//};
