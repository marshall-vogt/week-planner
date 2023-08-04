const $addActivity = document.querySelector('.week-btn');

$addActivity.addEventListener('click', addActivity);
function addActivity(event) {
  openModal();
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
