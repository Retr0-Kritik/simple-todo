let ctr = 1;

function deleteTodo(index) {
    const el = document.querySelector(`#todo${index}`); // selecting the element with the id of the todo
    
    el.parentNode.removeChild(el); // removing the element from the DOM
    console.log(`Todo with id ${index} deleted.`);
    ctr--;
}


function addTodo(){
    const inputEl = document.querySelector('#todoInput');
    const val = inputEl.value.trim(); // trim function eliminates any spaces at the 
                                      // start or end of the string.
    const divEl = document.createElement('div');
    divEl.setAttribute('id', "todo" + ctr); // setting the id of the div to todo-1, todo-2, etc.
    divEl.innerHTML = `${val} <button id="delButton" onclick="deleteTodo(${ctr})">DELETE</button>`; // setting the text of the div to the value of the input                                  

    document.querySelector("body").appendChild(divEl); // appending the div to the body
    inputEl.value = ''; // clearing the input field after adding the todo
    ctr++; // incrementing the counter for the next todo
}