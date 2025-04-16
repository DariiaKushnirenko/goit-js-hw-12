import { getImagesByQuery } from './js/pixabay-api'
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions'

const form = document.querySelector('.form');
const MoreBtn = document.querySelector('.MoreBtn');

let query = '';
let page = 1;
let perPage = 15;

form.addEventListener('submit', event => {
  event.preventDefault(); 

  query = event.target.elements['search-text'].value.trim();
  if (query === '') return;

  page = 1;
  fetchImages(query,page);
});

MoreBtn.addEventListener("click", () => {
  page += 1;
  fetchImages(query, page);
});

function fetchImages(query, page) {
  showLoader();

   if (page === 1) {
    clearGallery();
  }

  getImagesByQuery(query, page)
    .then(({ images, totalHits }) => {
      if (images.length === 0 && page === 1) {
        hideLoadMoreButton();
        hideLoader();
        return;
      }
      createGallery(images);

  if (page > 1) {
  const firstImage = document.querySelector('.gallery').firstElementChild;
  if (firstImage) {
    const cardHeight = firstImage.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      left: 0,
      behavior: "smooth",
    });
  }
}
      hideLoader();
      if (images.length < perPage|| page * perPage >= totalHits) {
        hideLoadMoreButton();
        iziToast.show({
        title: 'End of results',
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
        backgroundColor: "#ef4040",
        messageColor: "#fff",
        timeout: 5000,
        progressBar: false,
        close: true,
        transitionIn: 'fadeInDown',
        transitionOut: 'fadeOutUp',
    });
      } else {
        showLoadMoreButton();
      }
    })
    .catch(error => {
      console.log('Fetch failed:', error);
      hideLoader();
      hideLoadMoreButton();
    });
}
