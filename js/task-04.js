const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterRef = document.querySelector('#value');
let counterValue = 0;


decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick(){
    counterValue -=1;
    return counterRef.textContent = counterValue;
}
function onIncrementBtnClick(){
    counterValue +=1;
    return counterRef.textContent = counterValue;
}
