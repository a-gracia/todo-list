import { v4 as uuidv4 } from "uuid";

export class ToDo {
  constructor(title) {
    this.title = title;
    this.description = null;
    this.dueDate = null;
    this.priority = null;
    this.notes = null;
    this.id = uuidv4();
  }
}
