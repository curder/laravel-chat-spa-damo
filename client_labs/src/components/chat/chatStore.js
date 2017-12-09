import {userListUrl, getHeader} from '../../config'

const state = {
  userList: {}
}

const mutations = {
  SET_USER_LIST(state, userList) {
    state.userList = userList
  }
}

const actions = {
  setUserList: ({commit}) => {
    axios.get(userListUrl, {headers: getHeader()})
      .then(response => {
        if (response.status === 200) {
          commit('SET_USER_LIST', response.data.data)
        }
      })
  }
}

export default  {
  state, mutations, actions
}
