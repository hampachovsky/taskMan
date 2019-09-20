import { renderTask, dataForTask, filters } from './controller/task-controller';
import { getFilterData, renderFilter } from './controller/filter-controller';
import { createTask } from './controller/create-task-controller';

const taskBoard = document.querySelector('.board-task');
const filterArea = document.querySelector('.filter-area');
const createTaskBtn = document.querySelector('.create_task-btn');
const tasks = dataForTask();
const arrayOfFilters = getFilterData(filters);

renderTask(tasks, taskBoard);

renderFilter(filterArea, arrayOfFilters, tasks, taskBoard, renderTask);

createTaskBtn.addEventListener('click', createTask);
