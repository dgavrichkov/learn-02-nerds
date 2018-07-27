var modal = document.querySelector('.modal');
var closer = document.querySelector('.modal__close');
var trigger = document.querySelector('.modal--call');
console.log('я нашел модалку');

trigger.addEventListener('click', function(evt){
	evt.preventDefault();
	modal.classList.add('modal--on');
});

closer.addEventListener('click', function(){
	modal.classList.remove('modal--on');
});