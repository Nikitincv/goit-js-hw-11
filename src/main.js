import iziToast from 'izitoast';
import 'modern-normalize/modern-normalize.css';
import 'izitoast/dist/css/iziToast.min.css';



import { getPhotos } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const loader = document.querySelector('.loader');

const form = document.querySelector('.search-form');
export const gallery = document.querySelector('.gallery');

form.addEventListener('submit', formSubmit);
function formSubmit(evt) {
  evt.preventDefault();

  gallery.innerHTML = '';

  const { search } = evt.currentTarget.elements;
  const trimedValue = search.value.trim();
  if (trimedValue === '') {
    return iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
  loader.classList.remove('isheaden');

  getPhotos(trimedValue).then(data => {
      if (data.hits.length === 0) {
        return iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      createMarkup(data.hits);
      form.reset();
    })
    .catch(eror =>
      iziToast.error({ position: 'topRight', message: eror.message })
    )
    .finally(() => loader.classList.add('isheaden'));
}
