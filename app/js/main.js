import { renderComment } from './comment.js';

const field = document.querySelector('.comments__list');
const nameField = document.querySelector('.form__name');
const commentField = document.querySelector('.form__text');
const dateField = document.querySelector('.form__date');
const submitBtn = document.querySelector('.form__btn');

let comments = [];
loadComments();

submitBtn.addEventListener('click', submitBtnClickHandler);

function loadComments() {
  if (localStorage.getItem('comments')) {
    comments = JSON.parse(localStorage.getItem('comments'));
    comments.forEach((comment) => {
      renderComment(field, comment);
    });
  }
}

function submitBtnClickHandler(evt) {
  evt.preventDefault();

  const comment = {
    id: Date.now(),
    name: nameField.value,
    text: commentField.value,
    date: dateField.value || Date.now(),
    favorite: false
  }

  comments.push(comment);
  localStorage.setItem('comments', JSON.stringify(comments));

  renderComment(field, comment);

  nameField.value = '';
  commentField.value = '';
  dateField.value = '';
}
