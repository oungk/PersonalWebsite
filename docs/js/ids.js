'use strict';
/*
    DROPDOWN MENU
    Adapted from Erika Lee's I360 course: https://codepen.io/ebigalee/pen/dyydovo
*/
function toggleDropdown() {
    const socials = document.querySelector('.item');
    socials.classList.toggle('show');
}
document.querySelector('.toggle').addEventListener('click', toggleDropdown);

/*
    GRAPH BUTTON
*/

window.onload = function() {
// Call the changeChart function with the chartId for 'GENDER'
changeChart('iaexy');
};

function loadChart(chartId) {
    var container = document.getElementById('chartContainer');
    container.innerHTML = ''; // Clear previous content if any
    var script = document.createElement('script');
    script.src = 'https://datawrapper.dwcdn.net/' + chartId + '/embed.js';
    script.async = true;
    container.appendChild(script);
}

function changeChart(chartId) {
    loadChart(chartId);
}


// Set the default iframe URL for the first box on page load
window.onload = function() {
    changeIframe('https://datawrapper.dwcdn.net/iaexy/3/');
};

/*SLIDESHOW*/
// Initialize slide index and show slides
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    
    slides[slideIndex - 1].style.display = "block";
}


/*DATA SCROLL SPEED
*/
$.fn.moveIt = function() {
var $window = $(window);
var instances = [];

$(this).each(function() {
    instances.push(new moveItItem($(this)));
});

window.addEventListener('scroll', function() {
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
    inst.update(scrollTop);
    });
}, {passive: true});
}

var moveItItem = function(el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop) {
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function() {
    $('[data-scroll-speed]').moveIt();
});
