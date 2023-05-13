const add = function () {
  console.log("Im a function");
};

const add2 = (p) => {
  return p;
};
const add4 = (p) => p;

const add3 = () => console.log();

let array = [2, 4, 6, 7];

let narray = array.map(function (i, j) {
  console.log(i);
  console.log(j);
  return array[j] * 2;
});

console.log(narray);
console.log(array);
//////////////////////////////////////

//["Get Dry cleaning", "Review functions", "Review arrays"];
let currentTodos = [];
let doneTodos = [];
//["Finish all coded tasks", "Sent important email"];
const shows = (initailise) => {
  if (initailise) {
    currentTodos = ["Get Dry cleaning", "Review functions", "Review arrays"];
    doneTodos = ["Finish all coded tasks", "Sent important email"];
  }
  console.log(
    `Current todos: \n ${currentTodos} \nDone todos: \n ${doneTodos}\n`
  );
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

const completedTodoIterator = (todo) => {
  let x = currentTodos.find((i) => i == todo);
  console.log(x);
  if (x) doneTodos.push(x);
  else console.log("not part of the list");
};

// const completedTodoIterator1 = (todo) =>
//   (doneTodos = [doneTodos, currentTodos.find((i) => i == todo)]);

completedTodoIterator(`Get Dry cleaning`);

let k = ["a", "b", "c"];
let m = ['z','b','e']
k = [...k, m.find((i)=>i=='r')];
k.push(m.find((i)=>i=='r'));
console.log(k);

shows();

function obj (name , age){
    this.name = name;
    this.age = age;
}

class obj1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let newObj = new obj("Turki",25);
let newObj1 = new obj1("Turki",25);