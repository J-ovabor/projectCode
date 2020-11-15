const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImgs = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;//number of images that you select should be zero


prevBtn.addEventListener('click' , function(event) {
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected--;// currently selected = currentlyselected - 1;
    galleryImgs[currentlySelected].classList.add("active");
    nextBtn.disabled = false;
    if(currentlySelected  === galleryImgs.length){
        prevBtn.disabled = true;
    }

});



nextBtn.addEventListener('click' , function(event){

galleryImgs[currentlySelected].classList.remove("active");
currentlySelected++;
galleryImgs[currentlySelected].classList.add("active");
prevBtn.disabled = false;

if(galleryImgs.length === currentlySelected + 1){
    nextBtn.disabled = true; 
}
}); 