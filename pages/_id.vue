<template>
  <div class="w-full h-screen flex flex-col items-center justify-center relative">
    <h1 class="text-3xl my-10">Информация о задаче</h1>
    <div class=" border-2 border-solid border-black p-2" style="width: 400px">
      <div class="aboutTask__user">Id Пользователя: {{taskInfo.userId}}</div>
      <div class="aboutTask__title">Описание: {{taskInfo.title}}</div>
      <div v-if="taskInfo.completed" class="aboutTask__completed">Выполнена: Да</div>
      <div v-else class="aboutTask__completed">Выполнена: Нет</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
    return {
      taskInfo: {}
    }
  },
   async mounted() {
      try {
        await axios.get(`https://jsonplaceholder.typicode.com/todos?id=${this.$route.params.id}`)
          .then((res) => {
            this.taskInfo = res.data[0];
          });
      } catch(e) {
        console.log(e);
      };
  },

}
</script>
