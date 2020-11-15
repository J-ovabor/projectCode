const prevBtn = document.querySelector('.prev');
prevBtn.addEventListener('click', function(event){
    miGalleries[selectedImg].classList.remove("active")
    selectedImg--;
    miGalleries[selectedImg].classList.add("active")
    nextBtn.disabled = false;
    if(selectedImg === miGalleries.length){
        
        prevBtn.disabled = true;
    }


});

const nextBtn = document.querySelector('.next');
nextBtn.addEventListener('click' , function(event){
    miGalleries[selectedImg].classList.remove("active")
selectedImg++;
miGalleries[selectedImg].classList.add("active")
prevBtn.disabled = false;
if(miGalleries.length===selectedImg + 1);{
    nextBtn.disabled = true;
}
});
const miGalleries = document.querySelectorAll('.gallerie');
let selectedImg = 2;

