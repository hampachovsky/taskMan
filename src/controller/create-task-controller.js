import CreateTask from '../components/create-task';
import renderTask from './task-controller';
import { data } from '../model/data';
import DataBase from '../model/data-base';

const taskBoard = document.querySelector('.board-task');
const tasks = [];

const createTask = () => {
  const createTaskComponent = new CreateTask();

  createTaskComponent.onClose = () => {
    taskBoard.removeChild(createTaskComponent.element);
    createTaskComponent.unrender();
  };

  /**
   * On submit create a object with data and push it to array.
   * Set array with tasks to database. Then the board is
   * cleaned and after cleaning the task render
   */
  createTaskComponent.onSubmit = newData => {
    const task = data(newData);
    tasks.push(task);
    DataBase.setData('tasks', task.id, task);
    taskBoard.removeChild(createTaskComponent.element);
    createTaskComponent.unrender();
    renderTask(tasks, taskBoard);
  };

  taskBoard.appendChild(createTaskComponent.render());
};

export { createTask, taskBoard, tasks };
