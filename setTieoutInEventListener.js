//Try to use a function which binds "this" to the button.

const btn = document.querySelector('.btn');

function setBackground() {
	this.style.backgroundColor = 'red';
}

function btnBind(){
	setTimeout(setBackground.bind(btn), 2000)
};

btn.addEventListener('click', btnBind);
