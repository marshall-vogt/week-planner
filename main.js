
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

function handleSubmit(event) {
  event.preventDefault();
  console.log('event:', event);
  /*
  const eventValues = {
    time: ,
    day:  ,
    notes:
  } */
}
