<script lang="ts" setup>
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const { data: tasks, error, status } = await useFetch<Task[]>('/api/tasks', { lazy: true });
</script>
<template>
  <h1>Tasks</h1>
  <article v-if="status === 'pending'" aria-busy="true" />
  <p v-else-if="error" class="error">Error: {{ error.message }}</p>
  <div v-else>
    <article v-for="task in tasks" :key="task.id">
      <strong>{{ task.title }}</strong> - {{ task.completed ? 'Completed' : 'Pending' }}
    </article>
  </div>
</template>
