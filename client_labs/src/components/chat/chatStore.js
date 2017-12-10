import {
  getHeader,
  userListUrl, // 获取系统用户列表
  getUserConversationUrl, //获取用户的聊天记录
  saveChatMessageUrl, // 保存聊天信息
} from '../../config'

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
  },

  ADD_CHAT_TO_CONVERSATION(state, chat) {
    state.conversation.push(chat)
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
    let postData = {id: user.id}
    axios.post(getUserConversationUrl, postData, {headers: getHeader()})
      .then(response => {
        commit('SET_CURRENT_CHAT_USER', user)
        commit('SET_CONVERSATION', response.data.data)
      })
  },

  addNewChatToConversation: ({commit}, postData) => {
    axios.post(saveChatMessageUrl, postData, {headers: getHeader()})
      .then(response => {
        commit('ADD_CHAT_TO_CONVERSATION', response.data.data)
      })
  },
}

export default  {
  state, mutations, actions
}
