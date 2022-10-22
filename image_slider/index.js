const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7"
]
let count = 0;
const prev = document.querySelector('.left');
const next = document.querySelector('.right');
const container = document.querySelector('.container');

prev.addEventListener('click',() =>{
    count--;
    if(count < 0){
        count = arr.length - 1;
    }
    container.style.background = `url('img/${arr[count]}.jpg')`;
})

next.addEventListener('click',() =>{
    count++;
    if(count > arr.length-1){
        count = 0;
    }
    container.style.background = `url('img/${arr[count]}.jpg')`;
})