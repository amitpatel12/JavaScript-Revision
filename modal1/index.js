const open = document.getElementById('open')
const close = document.getElementById('close')
const modal_container = document.getElementById('modal_container');


// open.addEventListener('click', () =>{
//     modal_container.classList.add('show');
// });


// close.addEventListener('click', () =>{
//     modal_container.classList.remove('show');
// });

open.addEventListener('click', () =>{
    modal_container.style.display = 'flex';
});


close.addEventListener('click', () =>{
    modal_container.style.display = 'none';
});