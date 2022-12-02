// const openMenu = () => {
//     document.querySelector('.blackblur').className='blackblur active';
//     document.querySelector('aside').className='active';
// }
// const closeMenu = () => {
//     document.querySelector('.blackblur').className='blackblur';
//     document.querySelector('aside').className='';
// }
let closebtn=document.getElementById('close')
let menb=document.getElementById('menubtn')
let asid=document.querySelector('.asiclass')
let blurback=document.querySelector('.backblur')
// // document.getELementById('menubtn').onclick = e => {
// //     e.preventDefault();
// //     openMenu();
// }
menb.addEventListener("click",()=>{
    // alert('hello')
    asid.classList.add('active')
    blurback.classList.add('active')

})
closebtn.addEventListener("click",()=>{
    // alert('hello')
    asid.classList.remove('active')
    blurback.classList.remove('active')

})