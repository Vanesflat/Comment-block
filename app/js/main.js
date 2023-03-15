import { showEmptyMessage } from './empty-message.js';
import { validateCommentField, validateNameField } from './validate.js';
import { renderComment } from './comment.js';

const field = document.querySelector('.comments__list');
const nameField = document.querySelector('.form__name');
const commentField = document.querySelector('.form__text');
const dateField = document.querySelector('.form__date');
const submitBtn = document.querySelector('.form__btn');

let comments = [];
loadComments();

field.addEventListener('click', fieldClickHandler);
submitBtn.addEventListener('click', submitBtnClickHandler);
nameField.addEventListener('input', () => validateNameField(nameField));
commentField.addEventListener('input', () => validateCommentField(commentField));

function loadComments() {
  if (localStorage.getItem('comments')) {
    comments = JSON.parse(localStorage.getItem('comments'));
    comments.forEach((comment) => {
      renderComment(field, comment);
    });
  }
  showEmptyMessage(field, comments);
}

function fieldClickHandler(evt) {
  const commentElement = evt.target.closest('.comment');
  const likeBtn = evt.target.closest('.comment__btn-like');
  const deleteBtn = evt.target.closest('.comment__btn-delete');

  if (likeBtn) {
    const currentComment = comments.find((comment) => comment.id === +commentElement.dataset.id);
    currentComment.favorite = !currentComment.favorite;
    localStorage.setItem('comments', JSON.stringify(comments));

    likeBtn.classList.toggle('comment__btn-like--active');
  }

  if (deleteBtn) {
    comments = comments.filter((comment) => comment.id !== +commentElement.dataset.id);
    localStorage.setItem('comments', JSON.stringify(comments));

    commentElement.remove();
    showEmptyMessage(field, comments);
  }
}

function submitBtnClickHandler(evt) {
  evt.preventDefault();

  validateNameField(nameField);
  validateCommentField(commentField);

  if (nameField.classList.contains('invalid') || commentField.classList.contains('invalid')) {
    return;
  }

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
  showEmptyMessage(field, comments);

  nameField.value = '';
  commentField.value = '';
  dateField.value = '';
}
