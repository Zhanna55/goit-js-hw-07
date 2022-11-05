import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const listEl = document.querySelector('.gallery');
const markup = createGalaryItems(galleryItems);
listEl.insertAdjacentHTML('beforeend', markup);

function createGalaryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" target = "_self">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

listEl.addEventListener('click', onGalleryImage);

function onGalleryImage(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  console.log(event.target.getAttribute('data-source'));
}
