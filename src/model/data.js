function generateId() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return `_${Math.random().toString(36).substr(2, 9)}`;
}
// Create data for task, look at create-task-controller.js;
const data = userData => ({
  title: userData.title,
  description: userData.description,
  isFavorite: false,
  isArchive: false,
  id: generateId(),
});

const filters = ['Favorite', 'Archive', 'All'];

export { data, filters };
