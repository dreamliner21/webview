const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu ul');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
});
