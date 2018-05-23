
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
    ]
  },
  /**mutations 突变；变化；转变 //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation,//Mutation 必须是同步函数*/
  mutations: {
    increment(state) {
      state.count++
    }
  },
  /**Action 提交的是 mutation，而不是直接变更状态 Action 可以包含任意异步操作 */
//   actions: {
//     increment (context) {
//       context.commit('increment')
//     }
//   },
  actions: {
    increment ({ commit }) {
      commit('increment')
    },
    incrementAsync ({ commit }) {
        setTimeout(() => {
          commit('increment')
        }, 1000)
      }
  },
  /**Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性） */
 getters: {
    // ...
    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
    },
 /**Getter 也可以接受其他 getter 作为第二个参数 */
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})

export default store;

