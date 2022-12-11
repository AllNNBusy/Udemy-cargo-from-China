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

const /* cardOpen = document.querySelector('.delivery__btn'), */
	open = document.querySelector('.delivery__item'),
	// cardClose = document.querySelector('.delivery__btn-back'),
	close = document.querySelector('.delivery__item-hide'),
	divider = document.querySelectorAll('.delivery__items span');

	// cardOpen.addEventListener('click', () => {
	// 	open.classList.toggle('delivery__item_active'),
	// 	close.classList.toggle('delivery__item-hide_active');
	// });

	// cardClose.addEventListener('click', () => {
	// 	open.classList.toggle('delivery__item_active'),
	// 	close.classList.toggle('delivery__item-hide_active');
	// });

	divider.forEach(item => {
		item.addEventListener('click', () => {
			open.classList.toggle('delivery__item_active'),
			close.classList.toggle('delivery__item-hide_active');
		})
	});


// const cardOpen = document.querySelector('.delivery__btn'),
// open = document.querySelector('.delivery__item-hide'),
// cardClose = document.querySelector('.delivery__btn-back'),
// close = document.querySelector('.delivery__item'),
// divider = document.querySelectorAll('.delivery__items span');

// cardOpen.addEventListener('click', () => {
// 		open.classList.add('delivery__item-hide_active'),
// 		close.classList.add('delivery__item_active');
// 	});

// 	cardClose.addEventListener('click', () => {
// 		open.classList.remove('delivery__item-hide_active'),
// 		close.classList.remove('delivery__item_active');
// 	});

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("reviews__items");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент flex: */
    slides[slideIndex - 1].style.display = "flex";
}