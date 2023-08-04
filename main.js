
document.addEventListener('click', addActivity);

function addActivity(event) {
  if (event.target.tagName === 'BUTTON') {
    openModal();
  } else if (event.target.tagName === 'I') {
    closeModal();
  }
}

const $overlay = document.querySelector('.overlay');
const $modal = document.querySelector('.modal');

function openModal(event) {
  $overlay.className = 'overlay shown';
  $modal.className = 'modal shown';
}

function closeModal(event) {
  $overlay.className = 'overlay hidden';
  $modal.className = 'modal hidden';
}

const $entryForm = document.querySelector('form');
$entryForm.addEventListener('submit', handleSubmit);
const $selectTime = document.querySelector('#time-select');
const $selectDay = document.querySelector('#day-select');
const $notes = document.querySelector('textarea');

function handleSubmit(event) {
  event.preventDefault();

  const eventValues = {
    time: $selectTime.value,
    day: $selectDay.value,
    notes: $notes.value
  };
  console.log('eventValues:', eventValues);
  console.log('$notes:', $notes);
}
