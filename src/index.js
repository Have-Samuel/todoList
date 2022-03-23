import './style.css';

console.log('Hello Wabpack!');

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
  <div id ="head-wrapper">
    <h3 id = "head-text">Today's To Do</h3>
    <i id = "top-icon" class ="fa-solid fa-arrows-rotate"></i>
  </div>

  <ul id = "items-container">
    <div class = "item-container">
      <li class = "li-class"><i class= "fa-regular fa-spuare spuare"></i>${toDoList[0].description}</li>
      <i class = "fa-solid fa-ellipsis-vertical li-icon"></i>
    </div>
    <div class = "item-container">
      <li class = "li-class"><i class = "fa-regular fa-square square"></i>${toDoList[1].description}</li>
      <i class = "fa-solid fa-ellipsis-vertical li-icon"></i>
    </div>
  </ul>
  
  <div>
    <p id = "final-msg">Clear all completed</p>
  </div>`;
}