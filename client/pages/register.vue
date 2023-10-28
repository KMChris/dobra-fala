<template>
  <div>
<<<<<<< HEAD
    <h1>Register</h1>
    <form action="/login" method="post">
      <v-text-field label="Login" name="login" type="text" v-model="name"></v-text-field>
      <v-text-field label="Email" name="email" type="email" v-model="email"></v-text-field>
      <v-text-field label="Hasło" name="password" type="password" v-model="password"></v-text-field>
      <v-text-field label="Powtórz hasło" name="password" type="password"></v-text-field>
      <v-btn color="#2e8b57" @click="register()">Zaloguj</v-btn>
=======
    <h1>Stwórz konto</h1>
    <form action="/register" method="post">
      <v-text-field label="Login" name="login" type="text"></v-text-field>
      <v-text-field label="Email" name="email" type="email"></v-text-field>
      <v-text-field label="Hasło" name="password" type="password"></v-text-field>
      <v-text-field label="Powtórz hasło" name="password" type="password"></v-text-field>
      <v-btn color="#2e8b57" type="submit">Stwórz konto</v-btn>
>>>>>>> 44961ded6c1122967b261566fd1d0f35d0c421dc
    </form>
  </div>
</template>

<script setup lang="ts">
const name = ref('')
const email = ref('')
const password = ref('')

async function register() {
  try {
    const response = await fetch('http://localhost:4000/auth/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name.value, email: email.value, password: password.value })
    });
    const data = await response.json();
    window.location.href = '/login';
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
h1 {
  font-size: 50px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.v-text-field {
  width: 300px;
}
</style>