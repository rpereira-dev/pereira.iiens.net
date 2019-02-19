<style>
.content-index {
  display: flex;
  flex-direction: column;
  width: 72%;
  height: calc(100% - 4rem);
  overflow: auto;
  margin: 2rem 14%;
  background: white;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 8px 8px rgba(0,0,0,.3);
}

#pendulum {
}

.content-index h1 {
  font-size: 2.0rem;
}

.content-index-panel {
  display: flex;
  flex-direction: row;
  padding: 1rem 6rem;
  flex-grow: 1;
}

.content-index-panel > * {
  flex-grow: 1;
  width: 50%;
  height: 100%;
}

.content-index-links {
  text-align: left;
  flex-grow: 1;
}

</style>

<template>
  <div class="content">
    <div class="content-index">
      <h1>{{$lang.messages.index.welcome_msg}}</h1>
      <p>{{$lang.messages.index.info}}</p>
      <p>{{$lang.messages.index.bye}}</p>
      <div class="content-index-panel">

        <div class="content-index-links">
          <h4>{{$lang.messages.index.title}}</h4>
          <p>Github - <a target="__blank" href="https://github.com/rpereira-dev/">https://github.com/rpereira-dev/</a></p>
          <p>YouTube - <a target="__blank" href="https://www.youtube.com/channel/UCuw8U-RKsTFFbc6O6F8S1Ug?view_as=subscriber">https://www.youtube.com/channel/</a></p>
          <p>Root Me - <a target='_blank' href="https://www.root-me.org/rpereira42/">https://www.root-me.org/rpereira42/</a></p>
          <p><img src="https://projecteuler.net/profile/rpereira42.png" alt="Profile Image Project-Euler" title="Profile Image Project-Euler"></p>
        </div>

        <div class="content-index-links">
          <h4>Contact</h4>
          <p>LinkedIn - <a target="__blank" href="https://www.linkedin.com/in/romain-pereira/">https://www.linkedin.com/in/romain-pereira/</a></p>
          <p>E-mail - <a href="mailto:romain.pereira@ensiie.fr">romain.pereira@ensiie.fr</a></p>
          <p>{{$lang.messages.index.phone}} - <a href="#">+33 6 13 64 77 15</a></p>
          <pendulum id="pendulum"></pendulum>
        </div>

      </div>
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
