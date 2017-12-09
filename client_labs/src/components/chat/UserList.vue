<script>
  import {mapState} from 'vuex'
  import {chatStore} from './../../store'

  export default {
    computed: {
      ...mapState({
        chatStore: state => state.chatStore,
        userStore: state => state.userStore
      })
    },
    methods: {
      changeChatUser(user) {
        this.$store.dispatch('setCurrentChatUser', user)
      },
      userActiveStyle (user) {
        if (this.chatStore.currentChatUser === null) {
          return false
        }
        if (this.chatStore.currentChatUser.id == user.id) {
          return true
        }
        return false
      }
    }
  }
</script>
<template>
  <div id="chat-user-list-wrapper" class="wrapper">
    <ul class="list-group">
      <li v-for="user in chatStore.userList"
          v-if="user.name !== userStore.authUser.name"
          v-text="user.name"
          :class="{active: userActiveStyle(user)}"
          @click="changeChatUser(user)"
          class="list-group-item"></li>
    </ul>
  </div>
</template>
