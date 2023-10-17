// Toggle class active untuk coffee menu
const navbarNav = document.querySelector('.navbar-nav');
//  Ketika coffee menu di klik
document.querySelector('#coffee-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

// ketika search button di klik
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};


// klik diluar elemen
const cm = document.querySelector('#coffee-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function (e){
    if (!cm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});