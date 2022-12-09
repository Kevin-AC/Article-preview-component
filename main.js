let shareBtn = document.querySelector('.main-container__perfil--icon');
let sahareContainer = document.querySelector('.main-container__share')
let perfilContainer = document.querySelector('.main-container__perfil')
shareBtn.addEventListener('click',event=>{
    let presbtn=event.target.innerText;
    if(presbtn==''){
        sahareContainer.style.display='flex'
        perfilContainer.style.display='none'
    }
})