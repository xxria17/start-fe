console.log('app.js');

// Create
var todos = ['운동']
var todo = '게임';
todos.push(todo);
console.log(todos);

// Read
todos.forEach(function (todo) {
    console.log(todo);
});

// Update
var todos = ['운동','게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function (todo) {
    return todo === updateTodo;
});
console.log(updateTodo);

var newTodos = todos.map(function (todo) {
    if (todo === updateTodo) {
        return '공부';
    }
    return todo;
});
console.log(newTodos);

var words = ['a', 'b', 'c'];
console.log(words.splice(0,1));
console.log(words);

var todos = ['운동', '공부'];
var deleteTodo = '공부';
var newTodos = todos.filter(function (todo) {
    return todo !== deleteTodo;
});
console.log(newTodos);

/*var isMan = false;
if (isMan) {
    console.log('1');
} else if (isMan && isHero) {

}
else {
    console.log('2');
}*/


