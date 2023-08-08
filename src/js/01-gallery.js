// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const list = document.querySelector('ul.gallery');

const htmlStr = galleryItems
  .map(img => {
    return `<li class='gallery__item'>
        <a href=${img.original} class='gallery__link'>
            <img src=${img.preview} alt=${img.description} class='gallery__image'></img>
        </a>
    </li>`;
  })
  .join('');

list.insertAdjacentHTML('afterbegin', htmlStr);
list.style.listStyleType = 'none';

const options = {
  captions: true,
  captionsDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionPosition: 'bottom',
  captionsData: 'alt',
};
const lightbox = new SimpleLightbox('.gallery a', options);
console.log(galleryItems);
