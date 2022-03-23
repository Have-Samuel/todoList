import './style.css';

const toDoList = [{
  description: 'wash the dishes',
  completed: 'true',
  index: 1,
},
{
  description: 'complete to Do list project',
  completed: 'false',
  index: 2,
},
];

const todoListContainer = document.getElementById('todoList-container');

for (let k = 0; k < toDoList.length; k += 1) {
  todoListContainer.innerHTML = `
  <div class= "container">
  <div id ="head-wrapper">
    <h3 id = "head-text">Today's To Do</h3>
    <i id = "top-icon" class ="fa-solid fa-arrows-rotate"></i>
  </div>
  <div id = "message-wrapper">
  <p id = "msg-text">Add to your list...</p>
  <i id="msg-icon" class = "fa-solid fa-elliipsis-vertical"></i>
  </div>

  <ul id = "items-container">
    <div class = "item-container">
      <li class = "li-class"><i class= "fa-regular fa-square square"></i>${toDoList[0].description}</li>
      <i class = "fa-solid fa-ellipsis-vertical dots-icon"></i>
    </div>
    <div class = "item-container">
      <li class = "li-class"><i class = "fa-regular fa-square square"></i>${toDoList[1].description}</li>
      <i class = "fa-solid fa-ellipsis-vertical dots-icon"></i>
    </div>
  </ul>
  </div>
  <div>
    <p id = "last-msg">Clear all completed</p>
  </div>`;
}