<style>
.hidden {
  display: none;
}

.cv {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.cv-item {
  
}

.cv-item-pdf {
  width: 30%;
  height: 100%;
  margin: auto;
}

.cv-item-pdf-title {
  text-align: center;
  padding: 1rem 0;
}

.cv-item-info {
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 20%;
}

.cv-content-link {
  padding-top: 1rem;
}

.pdf-viewer {
  width: 100%;
  height: 90%;
  overflow: auto;
}

</style>

<template>
  <div class="content">

    <div class="cv">
      
      <div class="cv-item-pdf">
        <div class="cv-item-pdf-title" target="__blank"><a href="/static/CV/fr/cv.pdf">Téléchargement CV Français</a></div>
        <pdf class= "pdf-viewer" src="/static/CV/fr/cv.pdf" :page=1></pdf>
      </div>

      <div class="cv-item-pdf">
        <div class="cv-item-pdf-title" target="__blank"><a href="/static/CV/en/cv.pdf">Download English CV/Resume</a></div>
        <pdf class= "pdf-viewer" src="/static/CV/en/cv.pdf" :page=1></pdf>
      </div>


    </div>
    
  </div>
</template>

<script>

import pdf from 'pdfvuer'

export default {
  components: {
    pdf
  },

  data() {
    return {
      pdfsrc: `/static/CV/fr/cv.pdf`
    }
  }
}

</script>
