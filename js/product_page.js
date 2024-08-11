  // 文字敘述收納框
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      });
  }
  // 加入購物車
  var total = 0;
  var badge = document.querySelector(".badge")
  badge.style.display = "none";
  function add() {

      total = total + 1;
      if (total > 0) {
          badge.style.display = "inline-block";
          badge.innerText = total;

      }
  }

  // 取得 彈出大圖id
  var modal = document.getElementById("myModal");

  // 取得 彈出大圖示窗>圖片容器id
  var modalImg = document.getElementById("img01");

  var imgGroup = document.getElementsByClassName("imgGroup");
  // 點擊圖片onclick
  for (var i = 0; i < imgGroup.length; i++) {
      imgGroup[i].onclick = function () {
          modal.style.display = "block";
          modalImg.src = this.src;
      }
  }

  // 取得關閉視窗的x
  var span = document.getElementsByClassName("close")[0];

  // 當點擊x將整個彈出大圖顯示隱藏
  span.onclick = function () {
      modal.style.display = "none";
  }


  document.addEventListener("DOMContentLoaded", function () {
      const heartIcon = document.querySelector('.heart-icon');

      heartIcon.addEventListener('click', function () {
          heartIcon.classList.toggle('active2');
      });
  });


  <!-- Initialize Swiper -->

  var swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      direction: getDirection(),
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      on: {
          resize: function () {
              swiper.changeDirection(getDirection());
          },
      },
  });

  function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
  }


  // 響應式的圖片slide
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("Slide");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
  }