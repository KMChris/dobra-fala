<template>
  <div>
    <div class="flex profile">
      <v-text-field v-if="edit" v-model="user.user.name" label="Imię" style="max-width: 400px;" variant="outlined"></v-text-field>
      <h1 v-else class="name">{{ user.user.name }}</h1>
      <img class="avatar" height="168" src="/profile.png" alt="avatar">
    </div>
    <div class="flex">
      <v-rating v-model="rating" half-increments readonly length="3"></v-rating>
      {{ user.opinions.reduce((a, b) => a + b.level, 0) / user.opinions.length }} / 3
      <v-spacer></v-spacer>
      <v-btn v-if="edit" prepend-icon="mdi-content-save" color="#2e8b57" @click="edit = !edit">Zapisz</v-btn>
      <v-btn v-else prepend-icon="mdi-human-edit" color="#2e8b57" @click="edit = !edit">Edytuj profil</v-btn>
    </div>
    <v-textarea v-if="edit" v-model="user.user.description" label="Opis" style="max-width: 400px;" variant="outlined"></v-textarea>
    <p v-else class="opis">{{ user.user.description }}</p>
    <h2>Nagrody</h2>
    <div class="awards">
      <div class="awards-container">
        <v-img class="award" src="/awards/gold_1.png" alt="gold_1"></v-img>
        <v-img class="award" src="/awards/silver_2.png" alt="gold_1"></v-img>
        <v-img class="award" src="/awards/gold_3.png" alt="gold_1"></v-img>
      </div>
    </div>
  </div>
  <b style="color:#eaa760;">Liczba wykonanych zadań: {{ user.tasks.length }}</b>
  <b style="color:#eaa760;">Najdłuższy streak: {{ user.tasks.length }}</b>
  <b style="color:#eaa760;">Data dołączenia: {{ user.user.createdAt.split('T')[0] }}</b>
  <h2>Komentarze</h2>
  <v-card class="comment" v-for="comment in user.opinions">
    <v-card-title>
      <div style="display: flex;">
        {{ comment.title }}
        <v-spacer></v-spacer>
        <v-rating v-model="comment.level" size="27" color="#2e8b57" empty-color="#2e8b57"
                  length="3" readonly
        ></v-rating>
      </div>
    </v-card-title>
    <v-card-text>
      <div class="card">
        {{ comment.description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const user = ref({user: {name: '', description: '', createdAt: '1111-11-11T11:11'}, tasks: [], opinions: []});
const edit = ref(false);
const rating = ref(2.5);
const comments = ref([]);

const token = ref('');
onMounted(async () => {
  token.value = localStorage.getItem('token');
  try {
    const response = await fetch('http://localhost:4000/users/read', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token.value}` },
      body: JSON.stringify({userId: null})
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    user.value = data;
  } catch (error) {
    console.log(error);
    window.alert(error);
  }
});
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
  align-items: center;
}

.profile {
  align-items: flex-end;
}

.comment {
  margin-bottom: 10px;
}
</style>