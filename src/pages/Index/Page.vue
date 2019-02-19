<style>
.content-index {
  width: 80%;
  height: calc(100% - 4rem);
  overflow: auto;
  margin: 2rem 10%;
  background: white;
  text-align: center;
  overflow: hidden;
}

#pendulum {
}

.content-index h1 {
  font-size: 2.0rem;
}

</style>

<template>
  <div class="content">
    <div class="content-index">
      <h1>{{$lang.messages.index.welcome_msg}}</h1>
      <p>{{$lang.messages.index.info}}</p>
      <p>{{$lang.messages.index.bye}}</p>
      <pendulum id="pendulum"></pendulum>
    </div>
  </div>
</template>

<script>
import Pendulum from "@/components/Pendulum";

export default {
  components: {
    Pendulum
  }
};
</script>
