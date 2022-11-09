import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const listEl = document.querySelector('.gallery');

const markup = createGalaryItems(galleryItems);

listEl.insertAdjacentHTML('beforeend', markup);

function createGalaryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      title="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery__item');

gallery.on('show.simplelightbox', function () {
  gallery.options.captionDelay = 250;
});
