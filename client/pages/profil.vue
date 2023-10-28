<template>
  <div>
    <div class="flex">
      <h1 class="name">Labelka3</h1>
      <img class="avatar" height="168" src="/profile.png" alt="avatar">
    </div>
    <div class="flex">
      <v-rating v-model="rating" half-increments readonly length="3"></v-rating>
      2.5/3
      <v-spacer></v-spacer>
      <v-btn prepend-icon="mdi-human-edit" color="#2e8b57">Edytuj profil</v-btn>
    </div>
    <p class="opis">Lorem ipsum dolor sit amet.</p>
    <h2>Nagrody</h2>
    <div class="awards">
      <div class="awards-container">
        <v-img class="award" src="/awards/gold_1.png" alt="gold_1"></v-img>
        <v-img class="award" src="/awards/silver_2.png" alt="gold_1"></v-img>
        <v-img class="award" src="/awards/gold_3.png" alt="gold_1"></v-img>
      </div>
    </div>
  </div>
  <b style="color:#eaa760;">Liczba wykonanych zadań: 2</b>
  <b style="color:#eaa760;">Najdłuższy streak: 2</b>
  <b style="color:#eaa760;">Data dołączenia: 28.10.2023</b>
  <h2>Komentarze</h2>
  <v-card class="comment" v-for="comment in comments">
    <v-card-title>
      <div style="display: flex;">
        {{ comment.title }}
        <v-spacer></v-spacer>
        <v-rating v-model="comment.rating" size="27" color="#2e8b57" empty-color="#2e8b57"
                  length="3" readonly
        ></v-rating>
      </div>
    </v-card-title>
    <v-card-text>
      <div class="card">
        {{ comment.content }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const rating = ref(2.5)
const comments = ref([
  {
    title: 'Majsterkowanie',
    content: 'Lorem ipsum dolor sit amet',
    rating: 3,
  },
  {
    title: 'Sprzątanie',
    content: 'Lorem ipsum dolor sit amet',
    rating: 2
  },
]) // TODO get comments from server
</script>

<style scoped>
h2 {
  font-size: 30px;
  text-align: center;
  margin-top: 30px;
}

.award {
  margin: 15px;
  max-width: 60px;
}

.awards {
  width: 50%;
  margin: auto;
}

.awards-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

.comment {
  margin-bottom: 10px;
}
</style>