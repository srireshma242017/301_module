const todoList = () => {
    all = []
    const add = (todoItem) => {
        all.push(todoItem)
    }
    const markAsComplete = (index) => {
        all[index].completed = true
    }
    const overdue = () => {
        var ovdue = [];
        for (var i = 0; i < todos.all.length; i++) {
            if (todos.all[i].dueDate == yesterday) {
                ovdue.push(all[i]);
            }
        }
        return ovdue;
    }
    const dueToday = () => {
        var dutoday = [];
        for (var i = 0; i < todos.all.length; i++) {
            if (todos.all[i].dueDate == today) {
                dutoday.push(all[i]);
            }
        }
        return dutoday;
    }
    const dueLater = () => {
        var dulater = [];
        for (var i = 0; i < todos.all.length; i++) {
            if (todos.all[i].dueDate == tomorrow) {
                dulater.push(all[i]);
            }
        }
        return dulater;
    }
    const toDisplayableList = (list) => {
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

module.exports = todoList;