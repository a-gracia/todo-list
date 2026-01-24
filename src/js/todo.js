import { v4 as uuidv4 } from "uuid";

export class ToDo {
  constructor(
    title = "",
    description = null,
    dueDate = null,
    priority = null,
    notes = null,
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.id = uuidv4();
  }
}
