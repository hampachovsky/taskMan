import Task from '../components/task';
import EditTask from '../components/edit-task';
import DataBase from '../model/data-base';

// Support fn in which update data, after manipulating it.
const updateData = (task, newData) => {
  task = Object.assign({}, task, newData);
  return task;
};


const deleteTask = task => {
  DataBase.removeData('tasks', task.id);
  task = null;
  return task;
};

/* Render task function.
   For each tasks create a component and add instruction to that, then render it.
*/
const renderTask = (tasks, taskContainer) => {
  taskContainer.innerHTML = '';
  for (const task of tasks) {
    const componentTask = new Task(task);
    const editTask = new EditTask(task);
    componentTask.onEdit = () => {
      editTask.render();
      taskContainer.replaceChild(editTask.element, componentTask.element);
      componentTask.unrender();
    };

    editTask.onDelete = () => {
      deleteTask(task);
      taskContainer.removeChild(editTask.element);
      editTask.unrender();
    };

    // With callback fn take data and update structure with DB.
    editTask.onSubmit = newData => {
      const updatedTask = updateData(task, newData);
      DataBase.updateData('tasks', updatedTask.id, updatedTask);
      componentTask.update(updatedTask);
      componentTask.render();
      taskContainer.replaceChild(componentTask.element, editTask.element);
      editTask.unrender();
    };

    taskContainer.appendChild(componentTask.render());
  }
};

export default renderTask;
