<style>

.navbar {
  background: #ffffff;
  color: #454545;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  text-align: center;
}

.navbar-items {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
}

.navbar-item {
  flex-grow: 1;
  cursor: pointer;
  transition: all 0.5s;
  border-bottom: .2rem solid transparent;
  padding: 1.4rem 0;
}

.navbar-item:hover {
  color: black;
  border-bottom: .2rem solid black;
}

.languagepicker {
  z-index: 2;
	background-color: #FFF;
	display: inline-block;
	padding: 0;
	height: 3rem;
	overflow: hidden;
	transition: all .3s ease;
	vertical-align: top;
}

.languagepicker:hover {
	/* don't forget the 1px border */
	height: calc(8rem + 1px);
  border-bottom: none;
}

.languagepicker a {
	color: #000;
	text-decoration: none;
}

.languagepicker li {
	display: block;
	padding: 0px 20px;
	line-height: 4rem;
}

.languagepicker li:hover{
	background-color: #EEE;
}

.languagepicker a:first-child li {
	background: #FFF !important;
}

.languagepicker li img {
	margin-right: 5px;
}


</style>

<template>

  <div>

    <div class="navbar">

      <div class="navbar-items">

        <div class="navbar-item" v-on:click.stop="$router.push('/')">
          {{$lang.messages.navbar.index}}
        </div>

        <div class="navbar-item" v-on:click.stop="openTab('http://skutnik.iiens.net/cours')">
          {{$lang.messages.navbar.cours}}
        </div>

        <div class="navbar-item" v-on:click.stop="$router.push('/cv')">
          {{$lang.messages.navbar.cv}}
        </div>

        <div class="navbar-item" v-on:click.stop="$router.push('/projects')">
          {{$lang.messages.navbar.project}}
        </div>

        <div class="navbar-item languagepicker">
            <span v-if="picked"><li><img :src="picked.logo">{{picked.name}}</li></span>
            <template v-for="(lang, iso) in langs">
              <span v-if="lang != picked" v-bind:key="iso" v-on:click.stop="setLang(iso)"><li><img :src="lang.logo">{{lang.name}}</li></span>
            </template>
        </div>      

      </div>




    </div>

  </div>

</template>

<script>
export default {

  data() {
    return {
      picked: null,
      langs: {
        fr: {
          logo: "/static/images/fr.png",
          name: "Français"
        },
        en: {
          logo: "/static/images/en.png",
          name: "English"
        }
      }
    }
  },

  mounted() {
    const userLang = navigator.language || navigator.userLanguage;
    const iso = userLang.startsWith('fr') || userLang.startsWith('be') || userLang.startsWith('sn') ? 'fr' : 'en';
    this.setLang(iso);
  },

  methods: {
    setLang(iso) {
      this.picked = this.langs[iso];
      this.$lang.setLang(iso);
    },

    openTab(url) {
      window.open(url, '__blank');
    }
  }

};
</script>
