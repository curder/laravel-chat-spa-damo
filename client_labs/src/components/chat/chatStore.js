import {getHeader, userListUrl, getUserConversationUrl} from '../../config'

const state = {
  userList: {},
  currentChatUser: null,
  conversation: null,
}

const mutations = {
  SET_USER_LIST(state, userList) {
    state.userList = userList
  },

  SET_CURRENT_CHAT_USER(state, user) {
    state.currentChatUser = user
  },

  SET_CONVERSATION(state, conversation) {
    state.conversation = conversation
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
  },
  setCurrentChatUser: ({commit}, user) => {
    commit('SET_CURRENT_CHAT_USER', user)

    /*  let postData = {id: user.id}
      axios.post(getUserConversationUrl, postData, {headers: getHeader()})
        .then(response => {
          commit('SET_CURRENT_CHAR_USER', user)
          // commit('SET_CONVERSATION', response.data.data)
        })*/
  }

}

export default  {
  state, mutations, actions
}
