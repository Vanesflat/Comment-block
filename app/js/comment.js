import { convertDate } from './date.js';

const renderComment = (field, comment) => {
  const commentElement = `<li class="comment" data-id="${comment.id}">
      <p class="comment__name">${comment.name}</p>
      <p class="comment__text">${comment.text}</p>
      <p class="comment__date">${convertDate(comment.date)}</p>

      <button class="comment__btn comment__btn-like ${comment.favorite ? 'comment__btn-like--active' : ''}">
        <?xml version="1.0" encoding="utf-8"?>
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.4454 20.7608L3.57617 12.5663C1.35964 10.2582 1.49922 6.4736 3.87922 4.34929C6.24035 2.24181 9.82044 2.65105 11.6863 5.24171L12 5.67724L12.3137 5.24171C14.1796 2.65105 17.7596 2.24181 20.1208 4.34929C22.5008 6.4736 22.6404 10.2582 20.4238 12.5663L12.5546 20.7608C12.2483 21.0797 11.7517 21.0797 11.4454 20.7608Z"
            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <button class="comment__btn comment__btn-delete">
        <?xml version="1.0" encoding="utf-8"?>
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 6H21M5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6"
            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </li>`;

  field.innerHTML += commentElement;
}

export { renderComment };
