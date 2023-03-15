const emptyMessage = '<div class="comments__empty-message">Список комментариев пуст</div>';

function showEmptyMessage(field, comments) {
  if (!comments.length) {
    field.innerHTML += emptyMessage;
  } else if (field.querySelector('.comments__empty-message')) {
    field.querySelector('.comments__empty-message').remove();
  }
}

export { showEmptyMessage };
