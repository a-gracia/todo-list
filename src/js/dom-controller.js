export class DOMController {
  constructor(app) {
    this.app = app;
    this.currentProject = app.defaultToDo;

    this.todoContainer = document.querySelector("#todo-container");
    this.todoListTitle = document.querySelector("#todo-title");
    this.todoListContainer = document.querySelector("#todo-container #list");
    this.todoCardTemplate = document.querySelector("#todo-card");

    this.myProjectsContainer = document.querySelector("#my-projects-container");
    this.projectListContainer = document.querySelector(
      "#my-projects-container #list",
    );
    this.projectCardTemplate = document.querySelector("#project-card");

    // initialize buttons
    let myListButton = document.querySelector("#my-list-button");
    myListButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.currentProject = this.app.defaultToDo;

      this.loadProject();
      this.showToDoContainer();
    });

    let addToDoButton = document.querySelector("#add-todo-button");
    addToDoButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.currentProject.addToDo("New ToDo");
      this.loadProject();
    });

    let myProjectsButton = document.querySelector("#my-projects-button");
    myProjectsButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.showProjectsContainer();
      this.loadProjectList();
    });

    let addProjectButton = document.querySelector("#add-project-button");
    addProjectButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.app.addProject("New Project");
      this.loadProjectList();
    });
  }

  start() {
    this.loadProject();
  }

  loadProject() {
    this.todoListContainer.replaceChildren();

    this.todoListTitle.textContent = this.currentProject.name;

    this.currentProject.todoList.forEach((element) => {
      const clone = document.importNode(this.todoCardTemplate.content, true);

      let title = clone.querySelector("#title");
      let dueDate = clone.querySelector("#dueDate");
      let description = clone.querySelector("#description");
      let priority = clone.querySelector("#priority");
      let notes = clone.querySelector("#notes");
      let detaildDiv = clone.querySelector(".todo-details");
      let expandButton = clone.querySelector("#expand");
      let deleteButton = clone.querySelector("#delete");

      title.value = element.title;
      title.addEventListener("change", (e) => {
        element.title = e.target.value;
      });

      dueDate.value = element.dueDate;
      dueDate.addEventListener("change", (e) => {
        element.dueDate = e.target.value;
      });

      description.value = element.description;
      description.addEventListener("change", (e) => {
        element.description = e.target.value;
      });

      priority.value = element.priority;
      priority.addEventListener("change", (e) => {
        element.priority = e.target.value;
      });

      notes.value = element.notes;
      notes.addEventListener("change", (e) => {
        element.notes = e.target.value;
      });

      expandButton.addEventListener("click", (e) => {
        e.preventDefault();
        detaildDiv.classList.toggle("hidden");
      });

      deleteButton.setAttribute("data-id", element.id);
      deleteButton.addEventListener("click", (e) => {
        e.preventDefault();
        let id = e.target.getAttribute("data-id");
        this.currentProject.removeToDo(id);
        this.loadProject();
      });

      this.todoListContainer.appendChild(clone);
    });
  }

  loadProjectList() {
    this.projectListContainer.replaceChildren();
    this.app.projects.forEach((element) => {
      const clone = document.importNode(this.projectCardTemplate.content, true);

      let name = clone.querySelector("#name");
      let count = clone.querySelector("#count");
      let openButton = clone.querySelector("#open-button");
      let deleteButton = clone.querySelector("#delete-button");

      name.value = element.name;
      count.textContent = element.todoList.length;

      openButton.setAttribute("data-id", element.id);
      openButton.addEventListener("click", (e) => {
        e.preventDefault();

        let id = e.target.getAttribute("data-id");

        this.currentProject = this.app.getProjectById(id);

        this.todoListContainer.replaceChildren();
        this.showToDoContainer();
        this.loadProject();
      });

      deleteButton.setAttribute("data-id", element.id);
      deleteButton.addEventListener("click", (e) => {
        e.preventDefault();

        let id = e.target.getAttribute("data-id");
        this.app.removeProjectById(id);
        this.loadProjectList();
      });

      this.projectListContainer.appendChild(clone);
    });
  }

  showToDoContainer() {
    this.todoContainer.classList.remove("hidden");
    this.myProjectsContainer.classList.add("hidden");
  }

  showProjectsContainer() {
    this.todoContainer.classList.add("hidden");
    this.myProjectsContainer.classList.remove("hidden");
  }
}
