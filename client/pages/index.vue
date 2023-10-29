<template>
  <v-img max-height="150px" src="/main.png" alt="main"></v-img>
  <h1>Czym jest Dobra Fala?</h1>
  <v-img style="float: left;" max-height="150px" src="/illustrations/nei.png" alt="neighbors"></v-img>
  <p>Dobra Fala to więcej niż zwykła strona – to społeczność ludzi z otwartymi sercami, gotowymi wyciągnąć pomocną dłoń w stronę tych, którzy jej potrzebują.</p>
  <p>Pozwala Ci szybko skorzystać z pomocy Twoich sąsiadów.</p>
  <v-img style="float: left;" max-height="150px" src="/illustrations/map.png" alt="map"></v-img>
  <p>Celem jest znalezienie lub zaoferowanie pomocy w Twojej okolicy.</p>
  <v-img style="float: left;" max-height="150px" src="/illustrations/anno.png" alt="announcements"></v-img>
  <p>Chętne osoby z Twojego osiedla mogą pomóc Ci w pracach domowych zaopiekować się Twoim pupilem lub roślinką, albo po prostu spotkać się z Tobą.</p>
  <div style="display: flex;">
  <v-img style="float: left;" max-height="150px" src="/illustrations/pet.png" alt="pet"></v-img>
  <v-img style="float: left;" max-height="150px" src="/illustrations/flour.png" alt="flour"></v-img>
  <v-img style="float: left;" max-height="150px" src="/illustrations/meet.png" alt="meet"></v-img>
  </div>
  <p>Nie czekaj! Zanurz się w dobroczynne fale tej społeczności i odkryj, jak wiele możemy osiągną razem. Wspólne działanie to siła, która sprawia, że świat staje się lepszym miejscem. Dzięki Dobrej Fali masz okazję stać się częścią tej wspaniałej zmiany.</p>

  <b style="text-align:center; margin-top:20px;" >Dołącz do nas i poczuj, jak dobro wraca!</b>
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
</style>