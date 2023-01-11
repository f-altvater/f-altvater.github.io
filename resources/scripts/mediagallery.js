const imgs = document.querySelectorAll('.gallery img');
const fullPage = document.querySelector('#fullpage');
const largeScreen = document.querySelector('#large-screen-show');
const smallScreen = document.querySelector('#small-screen-show');
const mediumScreen = document.querySelector('#medium-screen-show');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';

    if(window.innerWidth > 1024) {
        largeScreen.style.display = 'none';
    } else if(window.innerWidth <= 600) {
        smallScreen.style.display = 'none';
    } else if(600 < window.innerWidth && window.innerWidth <= 1024) {
        mediumScreen.style.display = 'none';
    }
  });
});

function restore() {
    fullPage.style = 'none';
    
    if(window.innerWidth > 1024) {
        largeScreen.style.display = 'flex';
    } else if(window.innerWidth <= 600) {
        smallScreen.style.display = 'flex';
    } else if(600 < window.innerWidth && window.innerWidth <= 1024) {
        mediumScreen.style.display = 'flex';
    }
}
