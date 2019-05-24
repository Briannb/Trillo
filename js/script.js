window.onload = ()=>{
 let loader = document.querySelector('.loader')
 setTimeout(()=>{
  loader.style.opacity='0'
  loader.classList.add('loader-disabled')
 },2000)
 
}