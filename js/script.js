window.onload = ()=>{
 let loader = document.querySelector('.loader')
 setTimeout(()=>{
  loader.style.opacity='0'
  loader.classList.add('loader-disabled')
 },2000)
 

}

let btnMenu = document.querySelector('#btn-menu')
let exitBtn = document.querySelector('.exit-btn')
let navMenu = document.querySelector('.nav-links')
btnMenu.addEventListener('click',()=>{
  navMenu.classList.toggle('flex')
})
exitBtn.addEventListener('click',()=>{
 navMenu.classList.toggle('flex')
})