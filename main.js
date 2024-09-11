window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll' , window.scrollBy > 100)
})

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
    })
})


const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closemenu = document.querySelector("#close-menu-btn");
//const closeNav = 
//};


menuBtn.addEventListener('click', () => {
    menu.style.display ="flex";
    closemenu.style.display ="inline-block";
    menuBtn.style.display ="none";
})

closemenu.addEventListener('click',() => {
    menu.style.display ="none";
    closemenu.style.display ="none";
    menuBtn.style.display ="block";
});


