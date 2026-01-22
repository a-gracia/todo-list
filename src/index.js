import "./styles.css";
import { ToDoEngine } from "./engine";
import { DOMController } from "./dom-controller";

let app = new ToDoEngine();

let controller = new DOMController(app);
controller.start();
