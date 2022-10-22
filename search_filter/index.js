const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const ul = document.querySelector('#notes');
// const filter = document.querySelector('.search_btn');

btn.addEventListener('click', () =>{
    let li = document.createElement('li');
    li.classList.add('data');
    li.innerText = input.value;
    ul.appendChild(li);
})

function filterData(){
    const filter = document.querySelector('#searchbtn').value.toUpperCase();
    // console.log(filter);
    const li = document.querySelectorAll('.data');
    li.forEach(e => {
        if(e.innerText.toUpperCase().includes(filter)){
            e.style.display = "";
        }
        else{
            e.style.display = "none";
        }
    })
        
    
}
// filter.addEventListener('onKeyUp', (e) =>{
//     let value = e.value;
//     const li = document.querySelectorAll('.data');
//     li.forEach((e) =>{
//         console.log(e)
//     })
// })