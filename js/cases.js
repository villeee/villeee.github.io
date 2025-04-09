let carousel, slide;

document.addEventListener('DOMContentLoaded', () => {
  carousel = document.querySelector('.carousel-container');
  slide = document.querySelector('.carousel-slide');
  console.log(slide);
  console.log(carousel);
});

function handleCarouselMove(positive = true) {
  console.log(slide);
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft = positive
    ? carousel.scrollLeft + slideWidth
    : carousel.scrollLeft - slideWidth;
}
