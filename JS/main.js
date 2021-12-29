let todo_form_El = document.getElementById("todo_form");
let todo_input_El = document.getElementById("todo_input");
let todo_list_El = document.getElementById("todo_list");
let modal_El = document.getElementById("modal");
let modal_heading_El = document.getElementById("modal_heading");
let overlay_El = document.getElementById("overlay");

todo_input_El.focus()

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
    newTrashBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`

    // APPEND CHILD ELEMENTS JS 
    newTodo.appendChild(newTrashBtn)
    newItem.appendChild(newTodo)
    todo_list_El.appendChild(newItem)

    if(todo_list_El.childNodes.length > 3){
        todo_list_El.style.overflowY = "scroll"
    } else {
        todo_list_El.style.overflowY = "none"
    }

    // ADD MESSAGE WORNING MODAL JS 
    addMessage("bitta element qo'shildi!")
    
    // INPUT CLEAR JS 
    todo_input_El.value = ""
    } else {
        // EMPTY MESSAGE MODAL JS 
        emptyMessage("Iltimos biror bir ma'lumot kiriting!")
    }
} 



// DELETE ITEM JS 
document.addEventListener("click", (e)=>{
    if (e.target.classList[0] == "todo-trash-btn"){
        
        let item = e.target.parentElement
        item.parentElement.remove()

        // DELETE MESSAGE MODAL JS 
        deleteMessage(`1 ta element o'chrildi`)
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



// MODAL DELETE MASSEGE WORNING JS 
function deleteMessage(m) {
    modal_heading_El.textContent = m
    modal_El.style.backgroundImage = ` linear-gradient(225deg, #ff8200 50%, #ffff00 51%)`
    modal_El.style.color = "#000"
    modal_El.classList.remove("delete")
    overlay_El.classList.remove("delete")
    setTimeout(()=> {
    modal_El.classList.add("delete")
    overlay_El.classList.add("delete")
    },2000)
}


// MODAL EMPTY MASSEGE WORNING JS 
function emptyMessage(e) {
    modal_heading_El.textContent = e
    modal_El.style.backgroundImage = `linear-gradient(225deg, #15f1dd 52%, #7588eb 57%)`
    modal_El.style.color = "#000"
    modal_El.classList.remove("delete")
    overlay_El.classList.remove("delete")
    setTimeout( ()=> {
        modal_El.classList.add("delete")
        overlay_El.classList.add("delete")
    },2000)
}



// MODAL ADD MESSAGE JS 
function addMessage(a) {
    modal_heading_El.textContent = a
    modal_El.style.backgroundImage = `linear-gradient(45deg, #2983b8 48%, #af13ab 49%)`
    modal_El.style.color = "#fff"
    modal_El.classList.remove("delete")
    overlay_El.classList.remove("delete")
    setTimeout( ()=> {
        modal_El.classList.add("delete")
        overlay_El.classList.add("delete")
    },2000)
}