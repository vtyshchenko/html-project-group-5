
      var slideIndex = 1;
      showSlides(slideIndex);

      function showMore() {
        //removes the link
        document.getElementById('link').parentElement.removeChild('link');
        //shows the #more
        document.getElementById('more').style.display = 'block';
      }

      function plusSlides(n) {
        showSlides((slideIndex += n));
      }

      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName('reviews__slides');
        var dots = document.getElementsByClassName('demo');
        var miniat = document.getElementsByClassName('column');
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (i = 0; i < dots.length; i++) {
          some_text = { index: index };
          console.log(some_text);
          dots[i].className = dots[i].className.replace(' active', '');
          var index = dots[i].className.indexOf(' visually-hidden');
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

        for (i = -1; i < 2; i++) {
          dots[d - i].className = dots[d - 1].className.replace(' visually-hidden', '');
        }

        for (i = 0; i < slides.length; i++) {
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
  