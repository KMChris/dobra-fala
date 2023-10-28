<template>
  <v-app>
    <v-app-bar :elevation="2" color="#2e8b57">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <div class="title">
          <a style="flex-grow: 0; padding-right: 10px;" href="/">Dobra Fala</a>
          <a href="/"><v-img style="flex-grow: 0;" width="60px" height="60px" src="favicon.ico"/></a>
          <v-spacer></v-spacer>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-account-circle" href="/profil"></v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      color="#2e8b57">
      <v-list v-model:opened="open">
        <v-list-item href="/dodaj" prepend-icon="mdi-plus" title="Dodaj ofertę" height="50px"></v-list-item>
        <v-list-item href="/znaleziono" prepend-icon="mdi-magnify" title="Znaleziono" height="50px"></v-list-item>
        <v-list-item href="/zgubiono" prepend-icon="mdi-help" title="Zgubiono" height="50px"></v-list-item>
        <v-list-group href="/opieka" prepend-icon="mdi-paw" title="Opieka" height="50px"></v-list-group>
        <v-list-group value="opieka" @click="open = (open[0] === 'opieka') ? [] : ['opieka']">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-emoticon-excited-outline" title="Opieka" height="50px"></v-list-item>
          </template>
          <v-list-item href="/zwierze" title="Zwierze"></v-list-item>
          <v-list-item href="/roslina" title="Roślina"></v-list-item>
          <v-list-item href="/spotkanie" title="Spotkanie"></v-list-item>
        </v-list-group>
        <v-list-item href="/wypozyczalnia" prepend-icon="mdi-handshake" title="Wypożyczalnia" height="50px"></v-list-item>
        <v-list-group value="uslugi" @click="open = (open[0] === 'uslugi') ? [] : ['uslugi']">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-offer" title="Usługi" height="50px"></v-list-item>
          </template>
          <v-list-item href="/majsterkowanie" title="Majsterkowanie"></v-list-item>
          <v-list-item href="/sprzatanie" title="Sprzątanie"></v-list-item>
          <v-list-item href="/gotowanie" title="Gotowanie"></v-list-item>
          <v-list-item href="/zakupy" title="Zakupy"></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <slot/>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(false)
  const open = ref([])
</script>

<style scoped>
  .v-application {
    background-color: #f5e7cd;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .title {
    display: flex;
    align-items: center;
  }

  .v-spacer {
    flex-grow: 1;
  }
</style>
