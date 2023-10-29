<template>
  <div>
    <h1>Zakupy</h1>
    <v-card v-for="offer in offers">
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
          <v-btn color="#2e8b57">Przyjmij</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const offers = ref([
  {
    title: 'Oferta 1',
    content: 'Lorem ipsum dolor sit amet',
    rating: 1,
  },
  {
    title: 'Oferta 2',
    content: 'Lorem ipsum dolor sit amet',
    rating: 2
  },
]) // TODO get offers from server
</script>

<style scoped>
.v-card, h1 {
  margin-bottom: 10px;
}
</style>
