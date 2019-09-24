const forFavorite = () => {
  const rand = Math.floor(Math.random() * 2);
  return rand;
};

// Create data for task, look at create-task-controller.js;
const data = userData => ({
  title: userData.title,
  description: userData.description,
  isFavorite: forFavorite() === 0 && true,
  isArchive: forFavorite() === 0 && true,
});

const filters = ['Favorite', 'Archive', 'All'];

export { data, filters };
