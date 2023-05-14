//["Get Dry cleaning", "Review functions", "Review arrays"];
let currentTodos = [];
let doneTodos = [];
//["Finish all coded tasks", "Sent important email"];
const shows = (initailise) => {
  if (initailise) {
    currentTodos = ["Get Dry cleaning", "Review functions", "Review arrays"];
    doneTodos = ["Finish all coded tasks", "Sent important email"];
  }
  console.log(`Current todos: \n Done todos: \n ${doneTodos}\n`);
};
shows(true);

const completedTodo = (todo) => {
  // find the string "todo" is it matching with currentTodos? yes? pop it and push it to the other array
  // currentTodos.find((item,i)=>{
  //     //console.log(item);
  //     if (item == todo){
  //         let x = currentTodos.splice(i,1);
  //         doneTodos.push(x[0]);

  //     } else console.log("not part of ur todos")

  // })
  if (currentTodos.includes(todo)) {
    let x = currentTodos.indexOf(todo);
    let y = currentTodos.splice(x, 1);
    doneTodos.push(y[0]);
  } else console.log("not part of ur todos");
};
completedTodo("Get Dry cleaning");
shows();

const validateTodo = (todo) => {
  if (todo.length >= 2) return true;
  else return false;
};

const addNewTodo = (todo) => {
  if (validateTodo(todo)) currentTodos.push(todo);
};
addNewTodo("go to the gym");
shows();

const uncheckTodo = (undo) => {
  if (currentTodos.includes(undo)) {
    let x = doneTodos.indexOf(undo);
    let y = doneTodos.splice(x, 1);
    currentTodos.push(y[0]);
  } else console.log("not part of ur doneTodos\n");
};
uncheckTodo("2");
shows();

const editTodo = (index, todoList, updatedTodo) => {
  todoList[index] = updatedTodo;
};
editTodo(1, currentTodos, "Go home");
shows();

const funcay = (name) => `${name} is a JS ADDIct`;

const array = ["Omar", "Ali", "Yousf"];
array.forEach((member) => console.log(funcay(member)));

const newArray = array.filter((i) => i != "Ali");
console.log(newArray);
