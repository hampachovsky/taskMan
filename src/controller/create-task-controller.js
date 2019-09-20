import CreateTask from '../components/create-task';

const taskBoard = document.querySelector('.board-task');

export const createTask = () => {
  const createTaskComponent = new CreateTask();
  taskBoard.appendChild(createTaskComponent.render());
};
