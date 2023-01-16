const todoList = () => {
    all = []
    const add = (todoItem) => {
        all.push(todoItem)
    }
    const markAsComplete = (index) => {
        all[index].completed = true
    }
    const overdue = () => {
        // Write the date check condition here and return the array of overdue items accordingly.
        // FILL YOUR CODE HERE
        // ..
        // ..
        // ..
        var ovdue = [];
        for (var i = 0; i < todos.all.length; i++) {
            if (todos.all[i].dueDate == yesterday) {
                ovdue.push(all[i]);
            }
        }
        return ovdue;
    }
    const dueToday = () => {
        // Write the date check condition here and return the array of todo items that are due today accordingly.
        // FILL YOUR CODE HERE
        // ..
        // ..
        // ..
        var dutoday = [];
        for (var i = 0; i < todos.all.length; i++) {
            if (todos.all[i].dueDate == today) {
                dutoday.push(all[i]);
            }
        }
        return dutoday;
    }
    const dueLater = () => {
        // Write the date check condition here and return the array of todo items that are due later accordingly.
        // FILL YOUR CODE HERE
        // ..
        // ..
        // ..
        var dulater = [];
        for (var i = 0; i < todos.all.length; i++) {
            if (todos.all[i].dueDate == tomorrow) {
                dulater.push(all[i]);
            }
        }
        return dulater;
    }
    const toDisplayableList = (list) => {
        // Format the To-Do list here, and return the output string as per the format given above.
        // FILL YOUR CODE HERE
        // ..
        // ..
        // ..
        // return OUTPUT_STRING
        var OUTPUT_STRING = ""
        for (var i = 0; i < list.length; i++) {
            if (list[i].dueDate == today) {
                if (list[i].completed) {
                    OUTPUT_STRING = OUTPUT_STRING + '[x] ' + list[i].title + "\n";
                }
                else {
                    OUTPUT_STRING = OUTPUT_STRING + '[ ] ' + list[i].title + "\n";
                }
            }
            else if (list[i].dueDate == yesterday) {
                OUTPUT_STRING = OUTPUT_STRING + '[ ] ' + list[i].title + " " + yesterday + "\n";
            }
            else {
                OUTPUT_STRING = OUTPUT_STRING + '[ ] ' + list[i].title + " " + tomorrow + "\n";
            }
        }
        return OUTPUT_STRING;
    }
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #
const todos = todoList();
const formattedDate = d => {
    return d.toISOString().split("T")[0]
}
var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
)
todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
console.log("My Todo-list\n\n")
console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n\n")
console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n\n")
console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")