
document.addEventListener('click', addActivity);

function addActivity(event) {
  console.log('event:', event);
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
