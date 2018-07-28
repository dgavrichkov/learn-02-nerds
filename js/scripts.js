var modal = document.querySelector('.modal');
var closer = document.querySelector('.modal__close');
var trigger = document.querySelector('.modal--call');

trigger.addEventListener('click', function(evt){
	evt.preventDefault();
	modal.classList.add('modal--on');
});

closer.addEventListener('click', function(){
	modal.classList.remove('modal--on');
	document.querySelector('#name').classList.remove('write-us__field--invalid');
	document.querySelector('#email').classList.remove('write-us__field--invalid');
});

// slider
var slideIndex = 1; // это порядковый номер слайда
showSlides(slideIndex); // это вызов функции, которая показывает слайд

function currentSlide(n){
	showSlides(slideIndex = n);
} // это функция, которая вызывается нажатием на переключатель и сама вызывает функцию вызова слайда

function showSlides(n){
	var i; //определяем счетчик
	var slides = document.getElementsByClassName('slide'); // составляем массив слайдов
	var dots = document.getElementsByClassName('slider__control');//собираем массив переключателей
	if (n > slides.length){
		slideIndex = 1;
	}// если функция получила значение, превышающее общее количество слайдов, то показывется самый первый
	if (n < 1){
		slideIndex = slides.length;
	}// если функция получила значение менее одного (эт как?), то нам будет показан последний слайд
	for(i = 0; i < slides.length; i++){//перебираем слайды
		slides[i].classList.remove('slide--on');
	};// цикл проходит по слайдам, отбирая у них видимость
	for (i = 0; i < dots.length; i++) {
		dots[i].classList.remove('slider__control--current')
	};// цикл проходит по переключателям, убирая у них активное состояние
	slides[slideIndex-1].classList.add('slide--on');// в итоге функция показывает слайд, соответствующий индексу. элементы массива-то нумеруются с нуля
	dots[slideIndex-1].classList.add('slider__control--current');

}

//попробую в валидацию
var form = document.querySelector('.write-us__form');
form.addEventListener('submit', function(evt){
	if(!document.querySelector('#name').value || !document.querySelector('#email').value){
		evt.preventDefault();
		console.log('Заполните все поля!');
		document.querySelector('#name').classList.add('write-us__field--invalid');
		document.querySelector('#email').classList.add('write-us__field--invalid');
	};

});