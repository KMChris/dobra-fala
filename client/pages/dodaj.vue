<template>
  <h1 style="margin-bottom: 10px;">Dodaj ofertę</h1>
  <form @submit.prevent="submit">
    <v-text-field v-model="form.nazwa" label="Nazwa" required></v-text-field>
    <v-select v-model="form.kategoria" :items="kategorie" label="Kategoria" required></v-select>
    <v-slider v-model="form.trudnosc" step="1" max="4" show-ticks="always" tick-size="4" label="Poziom trudności:"></v-slider>
    <v-select v-model="form.ocena" :items="oceny" label="Wymagana ocena" value="Brak" required></v-select>
    <v-textarea v-model="form.opis" label="Opis" required></v-textarea>
    <v-btn type="submit" color="#2e8b57">Dodaj</v-btn>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  nazwa: '',
  kategoria: '',
  trudnosc: 0,
  ocena: '',
  opis: '',
})

const kategorie = ref([
  'Kategoria 1',
  'Kategoria 2',
  'Kategoria 3',
])

const oceny = ref([
    'Brak',
    'Ocena 2',
    'Ocena 3',
])
</script>

<style scoped>

</style>