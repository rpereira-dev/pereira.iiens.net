<style>

.content-project {
  width: 80%;
  height: calc(100% - 4rem);
  overflow: auto;
  margin: 2rem 10%;
  background: white;
  overflow: hidden;
  padding: 0 1rem;
}

</style>

<template>
  <div class="content">
    <div class="content-project">
        <h1>Projets personnels</h1>
        <p><a target='_blank' href="https://github.com/rpereira-dev/CubeEngine/">CubeEngine</a> {{$lang.messages.projects.cube_engine}} <a target='_blank' href="https://www.youtube.com/playlist?list=PLTsKtD9K5K8nkeK2MzVr3JFv4ofuJTugb">voxels</a></p>
        <p><a target='_blank' href="static/tipe/">TIPE</a> {{ $lang.messages.projects.tipe }}</p>
        <p><a target='_blank' href="https://globalgamejam.org/users/rpereira-toss">The bird and the blind</a> {{$lang.messages.projects.blind_bird}} (<a target='_blank' href="https://github.com/rpereira-dev/GlobalGameJam2018">github</a>)</p>
        <p><a target='_blank' href="http://51.75.16.126/">SGN</a>  {{$lang.messages.projects.sgn}} (<a href="https://sgnw.fr" target="__blank">SGN</a>)</p>

        <h1>Projets scolaires</h1>
        <p>---</p>
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
