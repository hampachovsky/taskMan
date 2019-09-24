import { getFilterData, renderFilter } from './controller/filter-controller';
import renderTask from './controller/task-controller';
import {
  createTask,
  taskBoard,
  tasks,
} from './controller/create-task-controller';
import { filters } from './model/data';

const filterArea = document.querySelector('.filter-area');
const createTaskBtn = document.querySelector('.create_task-btn');
const arrayOfFilters = getFilterData(filters);

renderFilter(filterArea, arrayOfFilters, tasks, taskBoard, renderTask);

createTaskBtn.addEventListener('click', createTask);
