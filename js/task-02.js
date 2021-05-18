const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsRef = document.querySelector('ul');

const itemsLi = ingredients.map(ingredient => {
    const liElem = document.createElement('li');
    liElem.textContent = ingredient;
    return liElem;
  })


  ingredientsRef.append(...itemsLi);