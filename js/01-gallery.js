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
  <a class="gallery__link" href="${original}">
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

listEl.addEventListener('click', showModal);

function showModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<div class="modal">
    <img
    class="modal__image"
    src="${event.target.dataset.source}"
    />
  </div>`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onEscPress);
        instance.element().querySelector('img').onclick = instance.close;
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', onEscPress);
      },
    }
  );

  function onEscPress(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }

  instance.show();
}
