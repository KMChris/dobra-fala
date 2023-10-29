<template>
  <div>
    <h1>Znaleziono</h1>
    <v-card v-for="offer in offers">
      <v-card-title>
        <div style="display: flex;">
          {{ offer.title }}
          <v-spacer></v-spacer>
        </div>
      </v-card-title>
      <v-card-text>
        <div class="card">
          {{ offer.description }}
        </div>
        <div style="display: flex;">
          <v-spacer></v-spacer>
          <v-btn color="#2e8b57">To moje!</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const offers = ref([]);

const token = ref('');
onMounted(async () => {
  token.value = localStorage.getItem('token');
  try {
    const response = await fetch('http://localhost:4000/tasks/search', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token.value}` },
      body: JSON.stringify({})
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    offers.value = data;
  } catch (error) {
    console.log(error);
    window.alert(error);
  }
});
</script>

<style scoped>
.v-card,
h1 {
  margin-bottom: 10px;
}
</style>