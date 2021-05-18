const ulRef = document.querySelector('#categories');
const itemRef = document.querySelectorAll('.item');

console.log(`В списке ${ulRef.children.length} категории.`);
itemRef.forEach(item =>
    console.log(`Категория: ${item.firstElementChild.textContent}\nКоличество элементов: ${item.lastElementChild.children.length}`));

