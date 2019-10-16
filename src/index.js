import { getFilterData, renderFilter, getTaskData } from './controller/filter-controller';
import renderTask from './controller/task-controller';
import {
  createTask,
  taskBoard,
  tasks,
} from './controller/create-task-controller';
import { filters } from './model/data';
import DataBase from './model/data-base';

const filterArea = document.querySelector('.filter-area');
const createTaskBtn = document.querySelector('.create_task-btn');
const arrayOfFilters = getFilterData(filters);

// After receiving data from the database, the application is drawn.
const renderApp = () => {
  getTaskData().then(() => {
    renderTask(tasks, taskBoard);
    renderFilter(filterArea, arrayOfFilters, tasks, taskBoard, renderTask);
  });
};

renderApp();
// Subscribe on update data event and redraw application.
DataBase.onUpdateData('tasks', renderApp);
createTaskBtn.addEventListener('click', createTask);
