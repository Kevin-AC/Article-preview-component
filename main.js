let shareBtn = document.querySelector('.main-container__perfil--icon');
let sahareContainer = document.querySelector('.main-container__share')
let profileContainer = document.querySelector('.main-container__perfil')
shareBtn.addEventListener('click',event=>{
    let presbtn=event.target.onclick;
    console.log(presbtn)
     if(presbtn==null){
         sahareContainer.style.display='flex'
         profileContainer.style.display='none'
     }
})