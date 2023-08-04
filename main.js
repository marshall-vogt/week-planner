
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

function handleSubmit(event) {
  event.preventDefault();

  const $timeSelected = $selectTime.value;

  console.log('event:', event);
  console.log('timeSelected', $timeSelected);
  console.log('$selectTime.options:', $selectTime.options);
  console.log('selectTime.selectIndex:', $selectTime.selectedIndex);
  /*
  const eventValues = {
    time: ,
    day:  ,
    notes:
  } */
}
