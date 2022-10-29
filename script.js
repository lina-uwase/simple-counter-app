let incrementButton = document.querySelector('#increment-btn')
let numberOfPassengers = document.querySelector('.count-el')
let count = 0;
let decrementButton = document.querySelector('#decrement-btn')
let decrement = 1



incrementButton.addEventListener('click',e =>{

    count = count+1
    console.log(count)
    numberOfPassengers.innerHTML = count

})

decrementButton.addEventListener('click', e =>{
    if(count>=0){
        decrement = count--
        numberOfPassengers.innerHTML = decrement;
    }
})

