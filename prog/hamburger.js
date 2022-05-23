const hamburger = document.querySelector('.hamburger-menu');
const list = document.querySelector('.navlinks-head');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	list.classList.toggle('active');
})

document.querySelectorAll('.navlinks').forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	list.classList.remove("active");
}))