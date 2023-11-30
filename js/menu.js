const menuMovile = document.getElementById("menu--phone");
const menu  = document.querySelector(".menu--container");



menuMovile.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})


