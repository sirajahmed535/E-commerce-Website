const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})




function funcone(){
    document.querySelector(".static-product-container").style.display = "flex";
    document.querySelector(".static-product-container-2").style.display = "none";
}

function functwo(){
    document.querySelector(".static-product-container").style.display = "none";
    document.querySelector(".static-product-container-2").style.display = "flex";
}

var headinglink1 = document.querySelector('#link-1');
headinglink1.addEventListener('click', functhree);

var headinglink2 = document.querySelector('#link-2');
headinglink2.addEventListener('click', funcfour);

function functhree(){
    headinglink1.classList.add('activee');
    headinglink2.classList.remove('activee'); 
}
function funcfour(){
    headinglink1.classList.remove('activee');
    headinglink2.classList.add('activee'); 
}


// if(headinglink1 == active){
//     headinglink1.style.background-color.display = 'block';
// }