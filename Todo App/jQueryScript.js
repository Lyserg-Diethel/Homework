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
	todoTextInput = todoTextInputField.value;
	let newTodoLI = $('<li></li>');
	let newSpan = $('<span></span>').text(`Item ${todoListUL.childElementCount + 1}: ${todoTextInput}`);
	let newDiv = $('<div></div>');
	let newI = $('<i></i>');

	$(todoListUL).append(newTodoLI);
	$(newTodoLI).append(newSpan);
	$(newTodoLI).append(newDiv);
	$(newDiv).addClass('removeTodo');
	$(newDiv).append(newI);
	$(newI).addClass('far').addClass('fa-trash-alt');

	todoTextInputField.value = '';
	output.textContent = todoListUL.childElementCount;
	todoTextInputField.focus();
}

const removeTodo = function(e){
	let regex = /[0-9]+/;
	if(e.target.tagName === 'I'){
		e.target.parentElement.parentElement.remove();
		output.textContent = todoListUL.childElementCount;

		for(let i = 0; i<todoListUL.childElementCount; i+=1){
			let itemLabel = todoListUL.children[i].children[0].textContent;
			let matchHolder = itemLabel.match(regex);
			todoListUL.children[i].children[0].textContent = itemLabel.replace(matchHolder, (i + 1));
			
		}
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
