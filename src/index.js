import "./css/styles.css";
import { ToDoEngine } from "./js/engine";
import { DOMController } from "./js/dom-controller";

let app = new ToDoEngine();

let controller = new DOMController(app);
controller.start();
