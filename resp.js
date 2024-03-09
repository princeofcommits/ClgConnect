Burger=document.querySelector('.Burger')
navlist=document.querySelector('.nav-list')
navbar=document.querySelector('.navbar')
rightnav=document.querySelector('.right-nav')

Burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav')
    rightnav.classList.toggle('v-nav')
    navlist.classList.toggle('v-nav')
})