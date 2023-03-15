const convertToTwoDigit = (value) => value < 10 ? `0${value}` : value;

const convertDate = (date) => {
  const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  date = new Date(date);

  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  let dateString = `${day} ${month} ${year}`;
  const timeString = `в ${convertToTwoDigit(hours)}:${convertToTwoDigit(minutes)}`;

  const now = new Date(Date.now());
  const diff = now.getDate() - date.getDate();

  if (!diff) {
    dateString = 'Сегодня';
  }

  if (diff === 1) {
    dateString = 'Вчера';
  }

  const convertedDate = `${dateString} ${timeString}`;

  return convertedDate;
}

export { convertDate };
