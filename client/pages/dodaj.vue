<template>
  <h1 style="margin-bottom: 10px;">Dodaj ofertę</h1>
  <form>
    <v-text-field v-model="name" label="Nazwa" required></v-text-field>
    <v-select v-model="category" :items="kategorie" label="Kategoria" required></v-select>
    <v-slider v-model="level" step="1" max="4" show-ticks="always" tick-size="4" label="Poziom trudności:"></v-slider>
    <v-select v-model="min" :items="oceny" label="Wymagana ocena" value="Brak" required></v-select>
    <v-textarea v-model="description" label="Opis" required></v-textarea>
    <v-btn @click="create()" color="#2e8b57">Dodaj</v-btn>
  </form>
</template>

<script setup lang="ts">
import { forInStatement } from '@babel/types';
import { ref } from 'vue'

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

const name = ref('')
const category = ref('')
const level = ref(0)
const min = ref('')
const description = ref('')
const token = ref('')

async function create() {
  try {
    //const token = localStorage.getItem('token')
    const response = await fetch('http://localhost:4000/tasks/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.value}`
      },
      body: JSON.stringify({ title: name.value, category: category.value, level: 2, min: 2, description: description.value })
    });
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  token.value = localStorage.getItem('token')
}
)
</script>

<style scoped></style>