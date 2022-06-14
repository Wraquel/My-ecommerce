// SINGULAR PRODUCT PAGE IMAGES
let SmallImg=document.querySelectorAll(".small-img-group img")
let MainImg=document.querySelector(".single-mat-image")

let activeImageSlide = 0
SmallImg.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        SmallImg[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        MainImg.innerHTML= "<img src='"+`${item.src}`+"' alt=''/> "
        activeImageSlide =i;
    })
})


const sizeBtns =document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i)=>{
    item.addEventListener('click', ()=>{
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn=i;
    })
})


   



//let SmallImg=document.querySelectorAll(".small-img-group img")
// let MainImg=document.querySelector(".single-mat-image")

// let activeImageSlide = 0
// SmallImg.forEach((item,i)=>{
//     item.addEventListener('click',()=>{
//         SmallImg[activeImageSlide].classList.remove('active');
//         item.classList.add('active');
//         MainImg.innerHTML= "<img src='"+`${item.src}`+"' alt=''/> "
//         activeImageSlide =i;
//     })
// })