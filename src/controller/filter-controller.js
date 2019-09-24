import Filter from '../components/filter';
// Filter function, which filters depending on the filter type
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
const renderFilter = (filterArea, filters, initialTask = null, taskBoard, renderTask) => {
// For each filtertype create Filter Component, and before render, realize method for it.
  for (const filter of filters) {
    const filterComponent = new Filter(filter);

    filterComponent.onFilter = () => {
      const filterName = filterComponent.element.querySelector('.btn')
        .textContent;
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

export { getFilterData, renderFilter };
