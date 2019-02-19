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

</style>

<template>
  <div id="app">
    <navbar id="navbar"></navbar>
    <router-view id="content"></router-view>
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
