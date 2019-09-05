const data = () => ({
  title: ['Eating', 'Reading', 'Writting', 'Shopping', 'Travelling', 'Working'][
    Math.floor(Math.random() * 6)
  ],
  description: [
    'Do Homework',
    'Buy milk',
    'Read a book',
    'Write a book',
    'Watch a film',
    'Eat',
  ][Math.floor(Math.random() * 6)],
});

export default data;
