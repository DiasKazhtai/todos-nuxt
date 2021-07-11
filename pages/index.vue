<template>
  <div class="container">
    <user-filter :users="$store.state.users" @filterUsers="addTarget" />
    <todo-list :todos="$store.getters.filteredUsers" />
  </div>
</template>

<script>
import todoList from '~/components/todoList.vue';
import userFilter from '~/components/userFilter.vue';
export default {
  components: { todoList, userFilter },
  mounted() {
    this.$store.dispatch('fetch');
  },
  methods: {
    addTarget(e) {
      const id = e.id;
      this.$store.commit('addTarget', id);
    },
  }
}
</script>


<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
