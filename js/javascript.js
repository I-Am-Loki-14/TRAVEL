const menuopen = document.querySelector('#menu-open')
const navmenu = document.querySelector('header nav')
const menuclose = document.querySelector('#menuclose')
const header = document.querySelector('header')
const search = document.getElementById('search')
const searchContainer=document.getElementById('search-container')
const closebtnn = document.getElementById('closee')

menuopen.onclick = () =>{
    navmenu.classList.add('active');
}
menuclose.onclick =()=>{
    navmenu.classList.remove('active');
}
navmenu.onclick = (e) =>{
    e.target = e.currentTarget ? navmenu.classList.remove('active'): '';
}

//window scroll 
window.addEventListener('scroll', ()=> {
    if (window.scrollY > 70) {
        header.style.backdropFilter="blur(3px)"
        header.style.boxShadow="1px 1px 5px black"
        header.style.transition=" all 0.3s"
    } else {
        header.style.backgroundColor="transparent";
        header.style.boxShadow= "";
        header.style.backdropFilter="";
        
    }
})
// search 

search.addEventListener('click',(e)=>{
    console.log("Clicked");
    e.preventDefault();
    searchContainer.classList.add('show')
})

// closebtn 
 closebtnn.addEventListener('click',()=>{
    searchContainer.classList.remove('show');
    console.log("closed");
    
 })

//  slider js 
const sliders = document.querySelectorAll('.slider .slider-item')
let index = 0;

function next() {
    index = (index + 1) % sliders.length
    sliders.forEach(slider => slider.classList.remove('active'));
    sliders[index].classList.add('active')
  
    
}
function prev() {
    index = (index - 1 + sliders.length) % sliders.length
    sliders.forEach(slider => slider.classList.remove('active'));
    sliders[index].classList.add('active')
}
setInterval(next ,3000)