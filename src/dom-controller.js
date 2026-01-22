export class DOMController {
  constructor(app) {
    this.app = app;
    this.todoContainer = document.querySelector("#todo-container");
    this.todoCardTemplate = document.querySelector("#todo-card");
  }

  start() {
    const defaultToDo = this.app.defaultToDo;
    this.loadProject(defaultToDo, this.todoContainer);
  }

  loadProject(project, container) {
    project.todoList.forEach((element) => {
      const clone = document.importNode(this.todoCardTemplate.content, true);
      let title = clone.querySelector("#title");
      let dueDate = clone.querySelector("#dueDate");
      let description = clone.querySelector("#description");
      let priority = clone.querySelector("#priority");
      let notes = clone.querySelector("#notes");
      title.textContent = element.title;
      dueDate.textContent = element.dueDate;
      description.textContent = element.description;
      priority.textContent = element.priority;
      notes.textContent = element.notes;

      container.appendChild(clone);
    });
  }
}
