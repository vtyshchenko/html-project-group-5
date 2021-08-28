let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName('reviews__slides');
  const dots = document.getElementsByClassName('demo');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < dots.length; i++) {
    some_text = { index: index };
    dots[i].className = dots[i].className.replace(' active', '');
    const index = dots[i].className.indexOf(' visually-hidden');
    if (index < 0) {
      dots[i].className += ' visually-hidden';
    }
  }

  d = slideIndex - 1;
  if (d < 1) {
    d = 1;
  } else {
    if (d > dots.length - 2) {
      d = dots.length - 2;
    }
  }

  for (let i = -1; i < 2; i += 1) {
    dots[d - i].className = dots[d - 1].className.replace(' visually-hidden', '');
  }

  for (let i = 0; i < slides.length; i += 1) {
    slides[i].className = slides[i].className.replace(' visually-hidden', '');

    if (i != n - 1) {
      slides[i].className += ' visually-hidden';
    }
  }

  slides[slideIndex - 1].className = slides[slideIndex - 1].className.replace(
    ' visually-hidden',
    '',
  );
  dots[slideIndex - 1].className += ' active';
}

// document.querySelector('button').addEventListener('click', function () {
//   document.querySelector('#content').style.height = 'auto';
//   this.style.display = 'none';
// });
