// Fork this repository for free:  https://github.com/jayreddivari

import $ from "jquery";
import "../scss/styles.scss";
import image1 from "../images/1.svg";
import image2 from "../images/2.svg";
import image3 from "../images/3.svg";
import image4 from "../images/4.svg";

$("#nav-toggle").on("click", function () {
    $("#nav-menu").toggleClass("show-menu");
});

$(window).on("scroll", function () {
    if (this.scrollY >= 100) {
        $("#header").addClass("scroll-header");
    } else {
        $("#header").removeClass("scroll-header");
    }

    $("section").each(function (i) {
        const sectionHeight = $("section")[i].offsetHeight;
        const sectionTop = $("section")[i].offsetTop - 50;
        const sectionId = $("section")[i].getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            $(`.nav__menu a[href*= ${sectionId}]`).addClass("active-link");
        } else {
            $(`.nav__menu a[href*= ${sectionId}]`).removeClass("active-link");
        }
    });

    if (this.scrollY >= 560) {
        $("#scroll-up").addClass("show-scroll");
    } else {
        $("#scroll-up").removeClass("show-scroll");
    }
});

$(".nav__link").each(function (i) {
    $(".nav__link").on("click", function () {
        $("#nav-menu").removeClass("show-menu");
    });
});

$("#theme-button").on("click", function () {
    if ($("body").hasClass("dark-theme")){
        $("body").removeClass("dark-theme");
        if ($(this).hasClass("bi-toggle-on")){
            $(this).removeClass("bi-toggle-on");
            $(this).addClass("bi-toggle-off");
        }
    } else {
        $("body").addClass("dark-theme");
        if ($(this).hasClass("bi-toggle-off")){
            $(this).removeClass("bi-toggle-off");
            $(this).addClass("bi-toggle-on");
        }
    }
});

function imageLoader () {
    $("#img1").append(`<img src=${image1} alt="home-image">`);
    $("#img2").append(`<img src=${image2} alt="about-image">`);
    $("#img3").append(`<img src=${image3} alt="support-image">`);
    $("#img4").append(`<img src=${image4} alt="app-image">`);
}

imageLoader();