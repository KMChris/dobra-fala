<template>
  <v-app>
    <v-app-bar :elevation="2" color="#2e8b57">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Dobra Fala</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>Home</v-btn>
      <v-btn>About</v-btn>
      <v-btn>Contact</v-btn>
    </v-app-bar>
  </v-app>
</template>

<style scoped>
  .v-application {
    background-color: #f5e7cd;
  }
</style>
