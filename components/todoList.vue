<template>
      <div class="absolute right-10 top-5">
        <h1 class="text-3xl">Список задач</h1>
        <a v-for="todo in todos" :key="todo.id"
          class="flex items-center border-2 border-solid border-black rounded-lg my-5 p-2"
          style="width: 1000px"
          href="#" @click.prevent="openTask(todo.id)">
          <div class="mx-8">Пользователь: {{todo.userId}}</div>
          <div  class="mx-auto">Название задачи: {{todo.title}}</div>
          <div v-if="todo.completed" class="px-2">Выполнена: Да</div>
          <div v-else class="px-2">Выполнена: Нет</div>
        </a>
    </div>
</template>


<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openTask(task) {
      this.$router.push('/' + task);
    },
  },
}
</script>

