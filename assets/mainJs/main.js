// =======active nav menu======

$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active-home");
    $(this).addClass("active-home");
  });
});

// ========sticky nav bar======
window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById("openNav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// =========facility======

$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".item-box").show("1000");
    } else {
      $(".item-box")
        .not("." + value)
        .hide("1000");
      $(".item-box")
        .filter("." + value)
        .show("1000");
    }
  });

  $(".list").click(function () {
    $(this).addClass("active-li").siblings().removeClass("active-li");
  });
});

// =====owl carasoul=====

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
});

// const gotop = document.querySelector(".gotopbtn");
// window.addEventListener("scroll", () => {
//   if(window.pageYOffset > 100){
//   gotop.classList.add("active-btn");
//   }else{
//     gotop.classList.remove("active-btn");
//   }
// })

// ====about page =====

const tabs = document.querySelectorAll(".left-about-sec li");
const content = document.querySelectorAll(".about-us");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // remove class
    tabs.forEach((tab) => tab.classList.remove("active-about-link"));

    tab.classList.add("active-about-link");

    // hide content
    content.forEach((c) => c.classList.remove("active-about"));
    // to show content
    content[index].classList.add("active-about");
  });
});



// =======Exam page=======

const acc_bts = document.querySelectorAll(".exam-title");
const acc_content = document.querySelectorAll(".exam-info");

acc_bts.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    panel.classList.toggle("active-body");
    btn.classList.toggle("active-body");
  });
});

// ======active gallery====

// $(document).ready(function() {
$(".tabs").click(function () {
  $(".tabs").removeClass("active-gallery");
  $(this).addClass("active-gallery");
});
// });

// // =====form clear=====
// function myFunction() {
document.getElementById("myForm").reset();
// }

