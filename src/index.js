import Filter from './components/filter';
import { renderTask, dataForTask, filters } from './presenter';
import { getFilterData, renderFilter } from './function-for-filter';

const taskBoard = document.querySelector('.board-task');
const filterArea = document.querySelector('.filter-area');
const tasks = dataForTask();
const arrayOfFilters = getFilterData(filters);

renderTask(tasks, taskBoard);

renderFilter(filterArea, arrayOfFilters, tasks, taskBoard, renderTask, Filter);
