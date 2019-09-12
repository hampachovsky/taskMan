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
const renderFilter = (filterArea, filters, initialTask, taskBoard, renderTask, Filter) => {
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

const getFilterData = filters => {
  const arrayOfFilter = [];
  for (const filter of filters) {
    arrayOfFilter.push({ caption: filter });
  }
  return arrayOfFilter;
};

export { getFilterData, renderFilter };
