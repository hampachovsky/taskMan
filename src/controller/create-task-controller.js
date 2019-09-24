import CreateTask from '../components/create-task';
import renderTask from './task-controller';
import { data } from '../model/data';

const taskBoard = document.querySelector('.board-task');
const tasks = [];

const createTask = () => {
  const createTaskComponent = new CreateTask();
  createTaskComponent.onClose = () => {
    taskBoard.removeChild(createTaskComponent.element);
    createTaskComponent.unrender();
  };

  createTaskComponent.onSubmit = newData => {
    // put data in to the data structure
    tasks.push(data(newData));
    taskBoard.removeChild(createTaskComponent.element);
    createTaskComponent.unrender();
    renderTask(tasks, taskBoard);
  };

  taskBoard.appendChild(createTaskComponent.render());
};

export { createTask, taskBoard, tasks };
