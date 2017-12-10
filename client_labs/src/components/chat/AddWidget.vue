<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        chatStore: state => state.chatStore
      })
    },
    data() {
      return {
        message: null,
      }
    },
    methods: {
      handleAddChat() {
        if (this.chatStore.currentChatUser === null) {
          alert('请选择要聊天的用户')
          return false;
        }
        if (this.message !== null) {
          let postData = {
            'receiver_id': this.chatStore.currentChatUser.id,
            'chat': this.message,
          }
          this.$store.dispatch('addNewChatToConversation', postData)
            .then(response => {
              this.message = null
            })
        }
      }
    }
  }
</script>
<template>
  <div id="chat-add-widget">
    <form v-on:submit.prevent="handleAddChat()">
      <div class="from-group">
        <input type="text"
               placeholder="请输入您的内容"
               v-model="message"
               class="form-control">
      </div>
    </form>
  </div>
</template>
<style lang="scss">

</style>
