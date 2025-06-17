// 1. Get the input, button, and list elements

// 2. Add event listener to button

// 3. Inside the event:
//    a. Get the input value
//    b. If empty, return
//    c. Create a new li element
//    d. Set li's text
//    e. Append li to the task list
//    f. Clear the input
//    g. add a new event listener to the new listener
//    h. toggle a new class for done tasks
//    i. style the new class in the css with line thru 

// 4. create a new delete button
// 5.loop thru all the done<li> elements in the class (done)
// 6. create a function for he counter
// 7. access the tasklist items
// 8. initialize the counter variable to 0
// 9. loop thru the task list and check for the items that are not in the class (done)

// 10.increment the counter value and update the p tag with the counter value

let inputBox = document.querySelector("#taskInput");
let button = document.querySelector("#addTaskBtn");
let list = document.querySelector("#taskList");
let deleteBtn = document.querySelector("#deleteDoneBtn");

button.addEventListener("click",()=>{
  let inputValue = inputBox.value.trim();
  if(inputValue === "") return;
  
  let newLi = document.createElement("li");
  newLi.textContent = inputValue;
  
  list.appendChild(newLi);
  updateTaskCounter();
  
  newLi.addEventListener("click", ()=>{
    newLi.classList.toggle("done");
    updateTaskCounter();
  })

  
  
  
  inputBox.value = "";

  
  
  
})

deleteBtn.addEventListener("click", ()=>{
  let allTasks = document.querySelectorAll("#taskList li");
  allTasks.forEach( task => {
    if(task.classList.contains("done")){
      task.remove();
    }
  });
});
updateTaskCounter();

function updateTaskCounter(){
  const taskList = document.querySelectorAll("#taskList li");
  let counter = 0;

  taskList.forEach(task => {
    if(!task.classList.contains("done")){
      counter ++;
    }
  })

  const counterElement = document.getElementById('task-counter'); // Make sure this exists in your HTML
  counterElement.textContent = `${counter} task(s) left`;
}


