export default defineEventHandler(async (event) => {
  const tasks = [
    { id: 1, title: 'Learn Nuxt', completed: false },
    { id: 2, title: 'Learn Vue', completed: true },
    { id: 3, title: 'Learn TypeScript', completed: true },
  ];

  return tasks;
});
