const moreButton = document.querySelector(
  '.information .metadata .titleAndMoreButton .moreButton'
);
const title = document.querySelector(
  '.information .metadata .titleAndMoreButton .title'
);

moreButton.addEventListener('click', () => {
  moreButton.classList.toggle('clicked');
  title.classList.toggle('clamp');
});
