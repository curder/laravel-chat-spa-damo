const state = {
  authUser: null,
}

const mutations = {
  SET_AUTH_USER (state, userObject) {
    state.authUser = userObject
  },
  CLEAR_AUTH_USER (state){
    state.authUser = null
  }
}

const actions = {
  setUserObject: ({commit}, userObject) => {
    commit('SET_AUTH_USER', userObject)
  },
  clearUserObject: ({commit}) => {
    commit('CLEAR_AUTH_USER')
  }
}

export default {
  state, mutations, actions
}
