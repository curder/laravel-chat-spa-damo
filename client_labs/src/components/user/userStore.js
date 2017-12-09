const state = {
  authUser: null,
}

const mutations = {
  SET_AUTH_USER (state, userObject) {
    state.authUser = userObject
  }
}

const actions = {
  setUserObject({commit}, userObject) {
    commit('SET_AUTH_USER', userObject)
  }
}

export default {
  state, mutations, actions
}
