'use strict';



$("body").on('click', '[href*="#"]', function(e){
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top}, 1000);
  e.preventDefault();
});



// Big image
let   divImage = document.createElement('div'),
workSection = document.querySelector('.works'),
bigImgLink = document.querySelectorAll('.big_img_link'),
bigImage = document.createElement('Img'),
workImage = document.querySelectorAll('.work_image');

divImage.classList.add('popup');
workSection.appendChild(divImage);
divImage.style.justifyContent = 'center';
divImage.style.display = 'none';
divImage.style.alignItems = 'center';
divImage.appendChild(bigImage);

workImage.forEach((item, i) => {
item.addEventListener('click', () => {
    bigImgLink.forEach((item, a) => {
        if (i == a) {
            bigImage.setAttribute('src', item.href);
        }
    });
});
});

workSection.addEventListener('click', function(e) {
e.preventDefault();
let target = e.target;
if (target && target.classList.contains('work_image')) {
    divImage.style.display = 'flex';
}
if (target && target.matches('div.popup')) {
    divImage.style.display = 'none';
}
});

