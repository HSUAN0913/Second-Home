
        // // go to top

        // // Get the button:
        // let mybutton = document.getElementById("h-top");

        // // When the user scrolls down 20px from the top of the document, show the button
        // window.onscroll = function () { scrollFunction() };

        // function scrollFunction() {
        //     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        //         mybutton.style.display = "block";
        //     } else {
        //         mybutton.style.display = "none";
        //     }
        // }

        // // When the user clicks on the button, scroll to the top of the document
        // function topFunction() {
        //     document.body.scrollTop = 0; // For Safari
        //     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        // }


        // 標題上捲消失
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "80px";
            } else {
                document.getElementById("navbar").style.top = "-80px";
            }
            prevScrollpos = currentScrollPos;
        }


        // 自動輪播功能

        let slideIndex = 0;
        let autoSlide;

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
            slides[slideIndex - 1].className += " fade-in";
            dots[slideIndex - 1].className += " active";
            autoSlide = setTimeout(() => plusSlides(1), 10000); // 每5秒切換一次幻燈片
        }

        // 初始化並顯示第一張幻燈片
        showSlides(slideIndex = 1);

        // 下一張幻燈片
        function plusSlides(n) {
            clearTimeout(autoSlide); // 停止自動輪播
            showSlides(slideIndex += n);
        }

        // 當前幻燈片控制
        function currentSlide(n) {
            clearTimeout(autoSlide); // 停止自動輪播
            showSlides(slideIndex = n);
        }


        // 動畫

        document.addEventListener("DOMContentLoaded", function () {
            const elements = document.querySelectorAll('.fade-in-element');

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1 // 只要10%元素進入視窗
            });

            elements.forEach(element => {
                observer.observe(element);
            });
        });