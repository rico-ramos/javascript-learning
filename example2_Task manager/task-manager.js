let taskInput = document.getElementById("task-input");
let addTaskBtn = document.getElementById("add-task");
let taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", (event) => {
    let taskText = taskInput.value.trim();

    console.log("Button clicked.", taskText);

    if (taskText === ""){
        alert("Please enter a task.");
        return;
    }

    //create a new list item
    let listItem = document.createElement("li");
    listItem.textContent = taskText;

    taskList.appendChild(listItem);

    // Add a delete button to the list item
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.className = "delete-btn";
    deleteButton.style.marginLeft = "10px";
    // Append delete button to the list item
    listItem.appendChild(deleteButton);

    // Add event listener to the delete button
    deleteButton.addEventListener("click", (e)=>{
        console.log("Delete button clicked");
        taskList.removeChild(listItem);
    })


    //clear the input field
    taskInput.value ='';

    // stop event propagation
    event.stopPropagation();
    event.preventDefault(); //prevents page refresh
});



// create new list item


// Add a delete button to the list item
// let deleteBtn = document.createElement("button")
// deleteBtn.textContent="❌";
// deleteBtn.className="delete-btn";
// deleteBtn.style.marginLeft="10px";

//
// listItem.addp

//



