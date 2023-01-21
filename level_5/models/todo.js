'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async addTask(params) {
      return await Todo.create(params);
    }
    static async showList() {
      console.log("My Todo list \n");

      console.log("Overdue");
      await this.overdue();
      console.log("\n");

      console.log("Due Today");
      await this.dueToday();
      console.log("\n");

      console.log("Due Later");
      await this.dueLater();

      const getAllTodos = async () => {
        try {
          const todos = await Todo.findAll();
          const todolist = todos.map(todo => todo.displayableString()).join("\n");
          console.log(todolist);
        }
        catch (error) {
          console.error(error);
        }
      }
    }


    static async overdue() {
      var formattedDate = (date) => {
        return date.toISOString().split("T")[0];
      };

      var Todaysdate = new Date();
      const yesterday = formattedDate(
        new Date(new Date().setDate(Todaysdate.getDate() - 1))
      );
      const overduelist = await Todo.findAll({
        where: { dueDate: yesterday },
      });
      const overduetodo = overduelist.map((overduelist) => overduelist.displayableString()).join("\n");
      console.log(overduetodo);
    }

    static async dueToday() {
      var formattedDate = (date) => {
        return date.toISOString().split("T")[0];
      };
      var Todaysdate = new Date();
      const today = formattedDate(Todaysdate);
      const duetodaylist = await Todo.findAll({
        where: { dueDate: today },
      });
      const duetodaytodo = duetodaylist.map((duetodaylist) => duetodaylist.displayableString()).join("\n");
      console.log(duetodaytodo);
    }

    static async dueLater() {
      var formattedDate = (date) => {
        return date.toISOString().split("T")[0];
      };
      var Todaysdate = new Date();
      const tomorrow = formattedDate(
        new Date(new Date().setDate(Todaysdate.getDate() + 1))
      );
      const duelaterlist = await Todo.findAll({
        where: { dueDate: tomorrow },
      });
      const duelatertodo = duelaterlist.map((duelaterlist) => duelaterlist.displayableString()).join("\n");
      console.log(duelatertodo);

    }

    static async markAsComplete(id) {
      const todo = await Todo.update(
        { completed: true },
        {
          where: {
            id: id,
          },
        }
      );
      console.log(todo.displayableString());
    }
    displayableString() {
      let checkbox = this.completed ? "[x]" : "[ ]";
      return `${this.id}. ${checkbox} ${this.title} ${this.dueDate}`;
    }
  }
  Todo.init({
    title: DataTypes.STRING,
    dueDate: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};