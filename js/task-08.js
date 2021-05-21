// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//  после чего рендерится коллекция. При нажатии на кнопку Очистить, 
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const boxesRef = document.querySelector('#boxes');
const numberRef = document.querySelector('#controls [type="number"]');
const renderBtnRef = document.querySelector('#controls [data-action="render"]');
const destroyBtnRef = document.querySelector('#controls [data-action="destroy"]');
let amount = 0;
let boxesArray = [];

numberRef.addEventListener('input', (event) => {
    amount = event.currentTarget.value})

function createBoxesArray(n) {
   for (let i=0; i < n; i+=1) {
        const newBox = document.createElement('div');
        newBox.style.width = (30 + i*10).toString() + 'px' ;
        newBox.style.height = (30 + i*10).toString() + 'px';
        newBox.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        boxesArray.push(newBox);
    };
    return boxesArray;
}

const createBoxes = () => {
    boxesRef.append(...createBoxesArray(amount));
}

const destroyBoxes = () => {
    boxesRef.innerHTML ='<div id="boxes"></div>';
    boxesArray = [];
}

renderBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);




