let ctr = 1;

function updateTodo(index) {
    const el = document.querySelector(`#todo${index}`);
    const newValue = prompt("Update your todo:".trim()); // prompt to get the new value from the user
    if (newValue !== null && newValue.trim() !== "") { 
        el.innerHTML = `${index}. ${newValue} <div id="del_and_upt"><button id="updateButton" onclick="updateTodo(${index})">UPDATE</button> <button id="delButton" onclick="deleteTodo(${index})">DELETE</button></div>`; // updating the text of the div with the new value
    }   else {
        alert("Todo cannot be empty!"); // alert if the new value is empty
    }
}

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
    divEl.innerHTML = `${ctr}. ${val} <div id="del_and_upt"><button id="updateButton" onclick="updateTodo(${ctr})">UPDATE</button> <button id="delButton" onclick="deleteTodo(${ctr})">DELETE</button></div>`; // setting the text of the div to the value of the input                                  

    document.querySelector("body").appendChild(divEl); // appending the div to the body
    inputEl.value = ''; // clearing the input field after adding the todo
    ctr++; // incrementing the counter for the next todo
}