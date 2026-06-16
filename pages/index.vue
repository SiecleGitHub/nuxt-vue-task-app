<script lang="ts" setup>
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const { data: tasks } = await useFetch<Task[]>('/api/tasks');
</script>
<template>
  <article>
    <h1>Tasks</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <strong>{{ task.title }}</strong> - {{ task.completed ? 'Completed' : 'Pending' }}
      </li>
    </ul>
  </article>
</template>
