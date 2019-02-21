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
  background-image: url("/static/images/bg.jpg");
  background-repeat:no-repeat;
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

.content-wrapper {
  display: flex;
  flex-direction: column;
  width: 72%;
  height: calc(100% - 4rem);
  overflow: auto;
  margin: 2rem 14%;
  background: rgba(255, 255, 255, 0.5);
  border: solid rgb(112, 112, 112) 1px;
  text-align: center;
  overflow: auto;
  box-shadow: 0 8px 8px rgba(0,0,0,.3);
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
