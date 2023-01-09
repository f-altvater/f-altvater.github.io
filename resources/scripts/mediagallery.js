const imgs = document.querySelectorAll('.gallery img');
const fullPage = document.querySelector('#fullpage');
const largeScreen = document.querySelector('#large-screen-show');
const smallScreen = document.querySelector('#small-screen-show');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';

    if(screen.width >= 1500) {
        largeScreen.style.display = 'none';
    } else if(screen.width <= 500) {
        smallScreen.style.display = 'none';
    }
  });
});

function restore() {
    fullPage.style = 'none';
    
    if(screen.width >= 1500) {
        largeScreen.style.display = 'flex';
    } else if(screen.width <= 500) {
        smallScreen.style.display = 'flex';
    }
}