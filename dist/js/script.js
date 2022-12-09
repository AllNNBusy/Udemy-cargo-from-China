const menu = document.querySelector('.hamburger'),
		show = document.querySelector('.nav__list'),
		hide = document.querySelectorAll('.nav__list li');

	menu.addEventListener('click', () => {
	menu.classList.toggle('hamburger_active');
	show.classList.toggle('nav__list_active');
	});

	hide.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.toggle('hamburger_active');
			show.classList.toggle('nav__list_active');
		})
});
