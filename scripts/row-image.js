let imageGrid = document.querySelector('.image-grid');
let rowImages = document.querySelectorAll('.row-images');

for (let i = 0; i < rowImages.length; i++) {
if(imageGrid.classList.contains('active')) {
        rowImages[i].classList.add('active');
    } else {
        rowImages[i].classList.remove('active');
    }
}