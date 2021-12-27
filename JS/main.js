let todo_form_El = document.getElementById("todo_form");
let todo_input_El = document.getElementById("todo_input");
let todo_list_El = document.getElementById("todo_list");


// EVENT LISTENER START 
todo_form_El.addEventListener("submit" , addTodo );


// FUNCTION START
function addTodo(e) {
    e.preventDefault()


    if (todo_input_El.value !== '') {
        // INPUT VALUE JS
    let textTodo = todo_input_El.value;


    // LI CREATE JS
    let newItem = document.createElement("li")
    newItem.classList.add("todo-item")


    // DIV CREATE JS
    let newTodo = document.createElement("div")
    newTodo.classList.add("todo") 
    newTodo.textContent = textTodo

    // BUTTON TRASH JS 
    let newTrashBtn = document.createElement("button")
    newTrashBtn.classList.add("todo-trash-btn")
    newTrashBtn.innerHTML = `<i class="fas fa-complated"></i>`
    newTrashBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`

    // APPEND CHILD ELEMENTS JS 
    newTodo.appendChild(newTrashBtn)
    newItem.appendChild(newTodo)
    todo_list_El.appendChild(newItem)

    if(todo_list_El.childNodes.length > 3){
        todo_list_El.style.overflowY = "scroll"
    }

    
    // INPUT CLEAR JS 
    todo_input_El.value = ""
    } else {
        alert("Iltimos biror bir ma'lumot kiriting!")
    }
} 



// DELETE ITEM JS 
document.addEventListener("click", (e)=>{
    if (e.target.classList[0] == "todo-trash-btn"){
        
        let item = e.target.parentElement
        item.parentElement.remove()
    
    }
})


// KEYBOARD KEY DELETE JS 

let data = todo_list_El.childNodes

document.addEventListener( "keydown" , (e)=> {
    if (data.length > 0){
        if ( e.keyCode == 46){
           todo = data[data.length - 1]
           todo.remove()
        }
    }
})

