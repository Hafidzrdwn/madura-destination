// dropdown item change language
const dropdownItem = document.querySelectorAll('.dropdown-item');

dropdownItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdown = item.closest('.dropdown');
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    dropdownToggle.innerHTML = item.innerHTML;

    // change active class
    dropdownItem.forEach((item) => {
      item.classList.remove('active');
    });
    item.classList.add('active');
  });
});

// check if user scroll down
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  if(window.scrollY > lastScrollTop) {
    navbar.style.top = '-150px'
  } else {
    navbar.style.top = '0'
  }
  lastScrollTop = window.scrollY
})

// make back to top button
const backToTop = document.querySelector('.btn-back-to-top');
backToTop.addEventListener('click', (e) => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})