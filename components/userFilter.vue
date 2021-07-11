<template>
      <div class="fixed left-10 top-5">
        <h1 class="text-3xl">Список пользователей</h1>
        <label v-for="user in users" :key="user"
          class=" block border-2 border-solid border-black rounded-lg my-5 p-2"
          @change="filterUsers">
            <input  :id="user" type="checkbox" name="users">
            Пользователь: {{ user }}
        </label>
    </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Number,
      required: true,
    }
  },
  methods: {
    filterUsers(e) {
      this.$emit('filterUsers', e.target);
    },
  }
}
</script>
