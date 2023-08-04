
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
const $tHead = document.querySelector('thead');

function handleSubmit(event) {
  event.preventDefault();
  const eventValues = {
    time: $selectTime.value,
    day: $selectDay.value,
    notes: $notes.value
  };
  $tHead.append(renderEntry(eventValues));
}

function renderEntry(entry) {
  const $tr = document.createElement('tr');
  const $td1 = document.createElement('td');
  const $td2 = document.createElement('td');
  const $td3 = document.createElement('td');
  const $td4 = document.createElement('td');
  const $button1 = document.createElement('button');
  const $button2 = document.createElement('button');
  $button1.setAttribute('class', 'delete-button');
  $button2.setAttribute('class', 'edit-button');
  $tr.appendChild($td1);
  $tr.appendChild($td2);
  $tr.appendChild($td3);
  $tr.appendChild($td4);
  $td3.appendChild($button1);
  $td4.appendChild($button2);
  $td1.textContent = entry.time;
  $td2.textContent = entry.notes;
  return $tr;
}
