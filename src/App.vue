<style>

html, body {
  width: 100vw;
  height: 100vh;
  margin:0;
  padding:0;
  font-family: 'Ubuntu', sans-serif;
}

#app {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  overflow: hidden;
}

#navbar {
  width: 100vw;
  height: 4rem;
}

#content {
  width: 100vw;
  height: calc(100vh - 4rem);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .35s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}



</style>

<template>
  <div id="app">
    <navbar id="navbar"></navbar>
    <transition name="fade">
      <router-view id="content"></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar
  }
};


</script>
