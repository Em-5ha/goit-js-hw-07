const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

const makeGallaryMarkup = imagesArr => {
  const {url, slt} = imagesArr;
  return `<li class="li_style"><img src=${url} alt=${slt} class="image_style"></li>`;
}
const ulRef = document.querySelector('#gallery');
const makeGallery = images.map(makeGallaryMarkup).join('');

ulRef.insertAdjacentHTML('afterbegin', makeGallery);

// const imagesEl = images.map(image => {
//     const liEl = document.createElement('li');
//     const imageEl = document.createElement('img');
//     imageEl.src = image.url;
//     imageEl.alt = image.alt;
//     liEl.classList.add('li_style');
//     imageEl.classList.add('image_style');
//     liEl.appendChild(imageEl);
//     return liEl;
// })
// ulRef.append(...imagesEl);