<template>
  <div>
    <h1>Stwórz konto</h1>
    <form action="/register" method="post">
      <v-text-field label="Login" name="login" type="text"></v-text-field>
      <v-text-field label="Email" name="email" type="email"></v-text-field>
      <v-text-field label="Hasło" name="password" type="password"></v-text-field>
      <v-text-field label="Powtórz hasło" name="password" type="password"></v-text-field>
      <v-btn color="#2e8b57" type="submit">Stwórz konto</v-btn>
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