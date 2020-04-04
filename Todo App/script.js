// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// define variables and functions used
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// your code here

const addTodoBtn = document.querySelector('.btnAdd');
const todoTextInputField = document.querySelector('.todoTextInput');
let todoTextInput;
const todoListUL = document.querySelector('.todoListUL');
const output = document.querySelector('.output');

const addTodo = function(){
	let newTodoLI = document.createElement('li');
	let newSpan = document.createElement('span');
	let newDiv = document.createElement('div');
	let newI = document.createElement('i');
	todoTextInput = todoTextInputField.value;
	
	todoListUL.appendChild(newTodoLI);
	newTodoLI.appendChild(newSpan);
	newSpan.textContent = `Item ${todoListUL.childElementCount }: ${todoTextInput}`
	newTodoLI.appendChild(newDiv);
	newDiv.classList.add('removeTodo');
	newDiv.appendChild(newI);
	newI.classList.add('far', 'fa-trash-alt');

	output.textContent = todoListUL.childElementCount;
}

const removeTodo = function(e){
	if(e.target.tagName === 'I'){
		e.target.parentElement.parentElement.remove();
		console.log(e.target.tagName);
		output.textContent = todoListUL.childElementCount;
	}
}

const displayTodoItemsCount = function(){

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// attach events
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// add todo item on '+' button click:
addTodoBtn.addEventListener('click', addTodo);

// add todo item on pressin 'enter' key in the input:

todoTextInputField.addEventListener('keyup', function(e) {
    if(e.keyCode === 13){
        addTodo();
    }
})



// remove Todo Item:
todoListUL.addEventListener('click', removeTodo, {capture: true})
