import axios from 'axios';

export const state = () => ({
  url: 'https://jsonplaceholder.typicode.com/todos',
  todos: [],
  selected: [],
  users: 10,
  pickedId: [],
});

export const getters = {
  filteredUsers(state) {
    if(state.selected.length === 0) {
      return state.todos;
    } else {
      return state.todos.filter(elem => state.selected.includes(elem.userId));
    }
  }
};

export const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },
  addTarget(state, id) {
    if(!state.selected.includes(Number(id))) {
      state.selected.push(Number(id));
    } else {
      state.selected = state.selected.filter(el => el !== Number(id));
    };
  },
};

export const actions = {
  async fetch({ state, commit}) {
    try {
      await axios.get(state.url)
        .then(response => {
          commit('setTodos', response.data);
        });
     } catch(e) {
       console.log(e);
     };
  }
};

