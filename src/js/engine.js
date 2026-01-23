import { Project } from "./project";

export class ToDoEngine {
  constructor() {
    this.defaultToDo = new Project("My list");
    this.defaultToDo.addToDo(
      "Hacer la interfaz del todo. Hacer que se vea como la de google",
    );
    this.defaultToDo.addToDo("Montar los proyectos");
    this.defaultToDo.addToDo("Hacer que se guarde localmente");
    this.defaultToDo.addToDo("Poner bonito, mirar bulma css");
    this.projects = [];
    this.addProject("hola");
    this.addProject("chao");
  }

  addProject(name) {
    let newProject = new Project(name);
    this.projects.unshift(newProject);
  }

  removeProjectById(id) {
    let project = this.getProjectById(id);
    let index = this.projects.indexOf(project);
    if (index > -1) {
      this.projects.splice(index, 1);
    }
  }

  getProjectById(id) {
    let project = this.projects.find((item) => item.id === id);
    return project;
  }
}
