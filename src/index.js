import Task from './components/task';
import EditTask from './components/edit-task';

const TEST_DATA = 6;
const taskBoard = document.querySelector('.board-task');

const renderTask = (tasks, taskContainer) => {
  for (let i = 0; i < TEST_DATA; i++) {
    const componentTask = new Task();
    const editTask = new EditTask();
    taskContainer.appendChild(componentTask.render());
    taskContainer.appendChild(editTask.render());
  }
};
renderTask(null, taskBoard);
