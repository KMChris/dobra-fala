<template>
<!--  <v-img max-height="150px" src="/main.png" alt="main"></v-img>-->
  <h1>Czym jest Dobra Fala?</h1>
  <div class="flex">
    <p>Dobra Fala to więcej niż zwykła strona – to społeczność ludzi z otwartymi sercami, gotowymi wyciągnąć pomocną dłoń w stronę tych, którzy jej potrzebują.</p>
    <img width="200px" src="/illustrations/nei.png" alt="neighbors"/>
  </div>
  <div style="display: flex; align-items: center; justify-content: space-between;">
    <img width="200px" src="/illustrations/map.png" alt="map"/>
    <p>Pozwala Ci szybko skorzystać z pomocy Twoich sąsiadów.</p>
  </div>
  <div style="display: flex; align-items: center; justify-content: space-between;">
    <p>Celem jest znalezienie lub zaoferowanie pomocy w Twojej okolicy.</p>
    <img width="200px" src="/illustrations/anno.png" alt="announcements"/>
  </div>
  <p>Chętne osoby z Twojego osiedla mogą pomóc Ci w pracach domowych zaopiekować się Twoim pupilem lub roślinką, albo po prostu spotkać się z Tobą.</p>
  <div style="display: flex;">
  <v-img style="float: left;" max-height="150px" src="/illustrations/pet.png" alt="pet"></v-img>
  <v-img style="float: left;" max-height="150px" src="/illustrations/flour.png" alt="flour"></v-img>
  <v-img style="float: left;" max-height="150px" src="/illustrations/meet.png" alt="meet"></v-img>
  </div>
  <p>Nie czekaj! Zanurz się w dobroczynne fale tej społeczności i odkryj, jak wiele możemy osiągną razem. Wspólne działanie to siła, która sprawia, że świat staje się lepszym miejscem. Dzięki Dobrej Fali masz okazję stać się częścią tej wspaniałej zmiany.</p>

  <p><b style="text-align:center; margin-top:20px;" >Dołącz do nas i poczuj, jak dobro wraca!</b></p>
  <p style="text-align:center;"><a href="/register">Załóż konto</a> i zacznij pomagać </p>
  <v-img style="float: left;" max-height="150px" src="/illustrations/love_it.png" alt="love-it"></v-img>

  <v-divider :thickness="3" color="#2e8b57"></v-divider>
  <div style="display: flex;">
  <v-img style="float: left;" max-height="150px" src="/sponsors/S2.png" alt="sponsor"></v-img>
  <v-img style="float: left;" max-height="150px" src="/sponsors/S3.jpg" alt="sponsors"></v-img>
  </div>
  <v-img style="float: left;" max-height="150px" src="/illustrations/houses.png" alt="houses"></v-img>
</template>

<script setup lang="ts">
</script>

<style scoped>
@keyframes show {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

p, img, h1 {
  animation-name: show;
  animation-duration: 1s;
}

h1 {
  text-align: center;
  font-size: 35px;
  font-weight: 400;
  padding: 0;
  margin: 20px 0;
}

a {
  color: #2e8b57;
  text-decoration: none;
}
a:hover {
  color: #2e8b57;
  text-decoration: underline;
}

.flex {
  display: flex;
  flex-direction: row;
}
</style>