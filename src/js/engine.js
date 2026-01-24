import { Project } from "./project";

export class ToDoEngine {
  constructor() {
    if (localStorage.getItem("app_data")) {
      let parsedJSON = JSON.parse(localStorage.getItem("app_data"));
      let defaultToDoData = parsedJSON.defaultToDo;
      let projectsData = parsedJSON.projects;

      // load default todo
      let defaultToDo = new Project(defaultToDoData.name);
      defaultToDoData.todoList.reverse().forEach((element) => {
        defaultToDo.addToDo(
          element.title,
          element.description,
          element.dueDate,
          element.priority,
          element.notes,
        );
      });

      this.defaultToDo = defaultToDo;

      // load projects
      let projects = [];
      projectsData.forEach((project) => {
        let new_project = new Project(project.name);

        project.todoList.reverse().forEach((todo) => {
          new_project.addToDo(
            todo.title,
            todo.description,
            todo.dueDate,
            todo.priority,
            todo.notes,
          );
        });

        projects.push(new_project);
      });

      this.projects = projects;
    } else {
      this.defaultToDo = new Project("My list");
      this.projects = [];
    }
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
