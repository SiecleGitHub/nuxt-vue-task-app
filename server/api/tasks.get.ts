export default defineEventHandler(async (event) => {
  const tasks = [
    { id: 1, title: 'Learn Nuxt', completed: false },
    { id: 2, title: 'Learn Vue', completed: true },
    { id: 3, title: 'Learn PHP', completed: true },
    { id: 4, title: 'Learn Symfony', completed: true },
    { id: 5, title: 'Learn TypeScript', completed: true },
    { id: 6, title: 'Learn React', completed: true },
  ];

  return tasks;
});
