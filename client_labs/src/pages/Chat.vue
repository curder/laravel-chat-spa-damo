<script>
  import ChatUserList from './../components/chat/UserList'

  export default {
    components: {
      'chat-user-list': ChatUserList
    },
    created() {
      this.$store.dispatch('setUserList')
    }
  }
</script>
<template>
  <div id="char-wrapper" class="wrapper">
    <section class="heading">
      <h1 class="page-title">Chat</h1>
    </section>
    <section class="content">
      <div class="col-md-2" id="user-list-col">
        <chat-user-list></chat-user-list>
      </div>
      <div class="col-md-10" id="chat-content-wrapper">
        show the chat content.
      </div>
    </section>
  </div>
</template>
