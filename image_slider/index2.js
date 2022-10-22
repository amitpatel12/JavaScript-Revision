(function(){

    const arr = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
    ]

    const btns = document.querySelectorAll('.btn');
    const container = document.querySelector('.container');
    let count = 0;
    btns.forEach( btn => {
        btn.addEventListener('click', () =>{
            if(btn.classList.contains('left')){
                count--;
                if(count < 0){
                    count = arr.length -1;
                }
            }
            else{
                count++;
                if(count > arr.length-1){
                    count = 0;
                }
            }
            container.style.background = `url('img/${arr[count]}.jpg')`;
            
        }
    )})
})();

