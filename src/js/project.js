import { ToDo } from "./todo";
import { v4 as uuidv4 } from "uuid";

export class Project {
  constructor(name = "New project") {
    this.name = name;
    this.todoList = [];
    this.id = uuidv4();
  }

  addToDo(title) {
    let todo = new ToDo((title = title));
    this.todoList.unshift(todo);
  }

  removeToDo(id) {
    let todo = this.todoList.find((element) => element.id === id);

    let index = this.todoList.indexOf(todo);

    if (index > -1) {
      this.todoList.splice(index, 1);
    }
  }
}
