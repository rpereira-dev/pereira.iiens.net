<style>

.navbar {
  background: rgba(255, 255, 255, 0.5);
  border: solid rgb(112, 112, 112) 1px;
  color: #454545;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  text-align: center;
  box-shadow: 0 8px 8px rgba(0,0,0,.3);
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
  border-bottom: .2rem solid rgb(112, 112, 112);
}

.languagepicker {
  z-index: 2;
	display: inline-block;
	padding: 0;
	height: 4rem;
	overflow: hidden;
	transition: all .4s ease;
	vertical-align: top;
}

.languagepicker:hover {
	height: calc(8rem + 1px);
  border-bottom: none;
}

.languagepicker:hover .li-others {
  background: rgba(255, 255, 255, 0.5);
}

.languagepicker li {
	display: block;
	line-height: 4rem;
}

.languagepicker li:hover {
	background-color: rgba(255, 255, 255, 0.8) !important;
}

.languagepicker li img {
	margin-right: 0.4rem;
}

.navbar-item i {
  margin-right: 0.6rem;
}


</style>

<template>

  <div>

    <div class="navbar">

      <div class="navbar-items">

        <div class="navbar-item" v-on:click.stop="$router.push('/')">
          <i class="fas fa-home"></i> {{$lang.messages.navbar.index}}
        </div>

        <div class="navbar-item" v-on:click.stop="openTab('http://skutnik.iiens.net/cours')">
          <i class="fas fa-book"></i> {{$lang.messages.navbar.cours}}
        </div>

        <div class="navbar-item" v-on:click.stop="$router.push('/cv')">
          <i class="far fa-file"></i> {{$lang.messages.navbar.cv}}
        </div>

        <div class="navbar-item" v-on:click.stop="$router.push('/projects')">
          <i class="fas fa-project-diagram"></i> {{$lang.messages.navbar.project}}
        </div>

        <div class="navbar-item languagepicker">
            <span v-if="picked"><li><img :src="picked.logo">{{picked.name}}</li></span>
            <template v-for="(lang, iso) in langs">
              <span v-if="lang != picked" v-bind:key="iso" v-on:click.stop="setLang(iso)"><li class="li-others"><img :src="lang.logo">{{lang.name}}</li></span>
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
