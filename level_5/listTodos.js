//  listTodos.js
var db = require("./models/index");

var listTodo = async () => {
    try {
        await db.Todo.showList();
    } catch (error) {
        console.error(error);
    }
};
(async () => {
    await listTodo();
})();