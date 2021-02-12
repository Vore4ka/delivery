
let cartBtn = document.querySelector('.cart-button');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close');
let cancelBtn = document.querySelector('.cancel-button');

cartBtn.addEventListener('click', function() {
	modal.classList.add('is-open');
});

closeBtn.addEventListener('click', function() {
	modal.classList.remove('is-open');
});

cancelBtn.addEventListener('click', function() {
	modal.classList.remove('is-open');
});

