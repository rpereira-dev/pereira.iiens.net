<style>

.content-project {
  padding: 0 2rem;
  text-align: left;
  line-height: 1;
}

.content-project i {
  margin-right: 0.4rem;
}

</style>

<template>
  <div class="content">
    <div class="content-project content-wrapper">
        <h1><i class="fas fa-user-circle"></i> {{$lang.messages.projects.personal_project}}</h1>
        <p><a target='_blank' href="https://github.com/rpereira-dev/CubeEngine/">CubeEngine</a> {{$lang.messages.projects.cube_engine}} <a target='_blank' href="https://www.youtube.com/playlist?list=PLTsKtD9K5K8nkeK2MzVr3JFv4ofuJTugb">voxels</a></p>
        <p><a target='_blank' href="https://globalgamejam.org/users/rpereira-toss">The bird and the blind</a> {{$lang.messages.projects.blind_bird}} (<a target='_blank' href="https://github.com/rpereira-dev/GlobalGameJam2018">github</a>)</p>
        <p><a target='_blank' href="http://51.75.16.126/">SGN</a>  {{$lang.messages.projects.sgn}} (<a href="https://sgnw.fr" target="__blank">SGN</a>)</p>
        <hr>
        <h1><i class="fas fa-school"></i> {{$lang.messages.projects.scholar_project}}</h1>
        <p><a target='_blank' href="static/tipe/">TIPE</a> {{ $lang.messages.projects.tipe }}</p>
        <p><a target="__blank" href="https://github.com/rpereira-dev/ENSIIE/tree/master/UE/S1/IPI/projet">Pathfinding </a> {{$lang.messages.projects.pathfinding}} (<a target="_blank" href="https://www.youtube.com/watch?v=LqVRTtKJ1z0">Demo</a>)</p>
        <p><a target="__blank" href="https://github.com/rpereira-dev/ENSIIE/tree/master/UE/S2/IPF/projet/">Subset summation</a> {{$lang.messages.projects.subsetsum}}</p>
        <p><a target="__blank" href="https://github.com/rpereira-dev/IPS-PROD">Scientific programmation</a> {{$lang.messages.projects.sci_prog}}</p>

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
