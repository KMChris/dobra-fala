<template>
  <h1 style="margin-bottom: 10px;">Dodaj ofertę</h1>
  <form>
    <v-text-field v-model="title" label="Nazwa" required></v-text-field>
    <v-select v-model="category" :items="kategorie" label="Kategoria" required></v-select>
    <v-slider v-model="level" step="1" max="4" show-ticks="always" tick-size="4" label="Poziom trudności:"></v-slider>
    <v-select v-model="min" :items="oceny" label="Wymagana ocena" value="Brak" required></v-select>
    <v-textarea v-model="description" label="Opis" required></v-textarea>
    <v-btn @click="create()" color="#2e8b57">Dodaj</v-btn>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const kategorie = ref([
  'Zagubione',
  'Opieka nad zwierzęciem',
  'Opieka nad rośliną',
  'Spotkanie',
  'Wypożyczanie',
  'Majsterkowanie',
  'Sprzątanie',
  'Gotowanie',
  'Zakupy'
])

const oceny = ref([
  'Brak',
  'Ocena 2.0+',
  'Ocena 2.5+',
])

const minMap = new Map([
  ['Brak', 0],
  ['Ocena 2.0+', 1],
  ['Ocena 2.5+', 2],
]);

const title = ref('');
const category = ref('');
const level = ref(0);
const min = ref('');
const description = ref('');

async function create() {
  try {
    const response = await fetch('http://localhost:4000/tasks/create', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token.value}` },
      body: JSON.stringify({
        title: title.value, category: category.value, level: level.value + 1,
        min: minMap.get(min.value), description: description.value, geoX: 0, geoY: 0
      })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    window.alert('Dodano ofertę');
    window.location.href = '/';
  } catch (error) {
    console.log(error);
    window.alert(error);
  }
}

const token = ref('');
onMounted(() => { token.value = localStorage.getItem('token') });
</script>

<style scoped></style>