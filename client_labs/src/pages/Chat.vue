<script>
  import ChatUserList from './../components/chat/UserList'
  import ChatWidget from './../components/chat/ChatWidget'
  import ChatAddWidget from './../components/chat/AddWidget'

  export default {
    components: {
      'chat-user-list': ChatUserList,
      'chat-widget': ChatWidget,
      'add-chat': ChatAddWidget
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
        <div class="chat-block">
          <chat-widget></chat-widget>
        </div>
        <div class="add-chat-block">
          <add-chat></add-chat>
        </div>

      </div>
    </section>
  </div>
</template>
