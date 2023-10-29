<template>
  <v-app>
    <v-app-bar :elevation="2" color="#2e8b57">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="title">
<!--          <a style="flex-grow: 0; padding-right: 10px;" href="/">Dobra Fala</a>-->
          <a href="/"><v-img style="flex-grow: 0;" width="60px" height="60px" src="/favicon.ico"/></a>
        </div>
      </v-toolbar-title>
      <v-btn icon="mdi-account-circle" href="/profil"></v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      color="#2e8b57">
      <v-list v-model:opened="open">
        <v-list-item href="/dodaj" prepend-icon="mdi-plus" title="Dodaj ofertę" height="50px"></v-list-item>
        <v-list-item href="/znaleziono" prepend-icon="mdi-magnify" title="Znaleziono" height="50px"></v-list-item>
        <v-list-item href="/zgubiono" prepend-icon="mdi-help" title="Zgubiono" height="50px"></v-list-item>
        <v-list-group prepend-icon="mdi-paw" title="Opieka" height="50px"></v-list-group>
        <v-list-group value="opieka" @click="open = (open[0] === 'opieka') ? [] : ['opieka']">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-emoticon-excited-outline" title="Opieka" height="50px"></v-list-item>
          </template>
          <v-list-item href="/opieka/zwierze" title="Zwierze"></v-list-item>
          <v-list-item href="/opieka/roslina" title="Roślina"></v-list-item>
          <v-list-item href="/opieka/spotkanie" title="Spotkanie"></v-list-item>
        </v-list-group>
        <v-list-item href="/wypozyczanie" prepend-icon="mdi-handshake" title="Wypożyczanie" height="50px"></v-list-item>
        <v-list-group value="uslugi" @click="open = (open[0] === 'uslugi') ? [] : ['uslugi']">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-offer" title="Usługi" height="50px"></v-list-item>
          </template>
          <v-list-item href="/uslugi/majsterkowanie" title="Majsterkowanie"></v-list-item>
          <v-list-item href="/uslugi/sprzatanie" title="Sprzątanie"></v-list-item>
          <v-list-item href="/uslugi/gotowanie" title="Gotowanie"></v-list-item>
          <v-list-item href="/uslugi/zakupy" title="Zakupy"></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <div class="container">
        <slot/>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(false)
  const open = ref([])
</script>

<style scoped>
  a {
    text-decoration: none;
    color: inherit;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .v-spacer {
    flex-grow: 1;
  }

  .container {
    padding: 20px 20%;
  }
</style>
