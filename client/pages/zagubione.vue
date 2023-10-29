<template>
  <div>
    <h1>Zgubiono</h1>
    <v-card v-for="(offer, i)  in offers">
      <v-card-title>
        <div style="display: flex;">
          {{ offer.title }}
          <v-spacer></v-spacer>
        </div>
      </v-card-title>
      <v-card-text>
        <div class="card">
          {{ offer.content }}
        </div>
        <div style="display: flex;">
          <v-spacer></v-spacer>
          <v-btn :disabled="disabled[i]" color="#2e8b57" @click="disabled[i] = true">Znalazłem!</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>

</template>

<script setup lang="ts">
const offers = ref([]);
const disabled = ref([false, false, false, false, false, false, false, false, false, false]);
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
.v-card, h1 {
  margin-bottom: 10px;
}
</style>