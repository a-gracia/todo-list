import { Project } from "./project";

export class ToDoEngine {
  constructor() {
    this.defaultToDo = new Project("Default");
    this.defaultToDo.addToDo("test");
    this.defaultToDo.addToDo("test");
    this.defaultToDo.addToDo("test");
    this.projects = [];
  }
}
