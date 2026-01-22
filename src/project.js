import { ToDo } from "./todo";

export class Project {
  constructor(name = "New project") {
    this.name = name;
    this.todoList = [];
  }

  addToDo(title) {
    let todo = new ToDo((title = title));
    this.todoList.push(todo);
  }
}
