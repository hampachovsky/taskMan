import Filter from '../components/filter';
import DataBase from '../model/data-base';
import 'babel-polyfill';
import { tasks as taskData } from './create-task-controller';

// Async func, In order to wait for a response from the server and then draw cards.
async function getTaskData() {
  taskData.splice(0, taskData.length);
  const data = await DataBase.getData('tasks');
  return taskData.push(...data);
}

// Filter function, which filters depending on the filter type.
const filterTask = (tasks, filterName) => {
  switch (filterName) {
    case 'All':
      return tasks;
    case 'Favorite':
      return tasks.filter(it => it.isFavorite);
    case 'Archive':
      return tasks.filter(it => it.isArchive);
    default:
      return tasks;
  }
};


// eslint-disable-next-line spaced-comment
// prettier-ignore
const renderFilter = (filterArea, filters, initialTask, taskBoard, renderTask) => {
  filterArea.innerHTML = '';
  // For each filtertype create Filter Component, and before render, realize method for it.
  for (const filter of filters) {
    const filterComponent = new Filter(filter);
    // When you click on a filter of a certain type, filter it, and then complete the tasks.
    filterComponent.onFilter = () => {
      const filterName = filterComponent.element.querySelector('.btn').textContent;
      const filtredTask = filterTask(initialTask, filterName);
      renderTask(filtredTask, taskBoard);
    };

    filterArea.appendChild(filterComponent.render());
  }
};


// All filter type add in one structure for next step.
const getFilterData = filters => {
  const arrayOfFilter = [];
  for (const filter of filters) {
    arrayOfFilter.push({ caption: filter });
  }
  return arrayOfFilter;
};

export { getFilterData, renderFilter, getTaskData };
