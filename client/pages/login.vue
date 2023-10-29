<template>
  <div>
    <h1>Login</h1>
    <form action="/login" method="post">
      <v-text-field label="Email" name="email" type="text" v-model="email"></v-text-field>
      <v-text-field label="Hasło" name="password" type="password" v-model="password"></v-text-field>
      <v-btn color="#2e8b57" @click="login">Zaloguj</v-btn>
    </form>
  </div>
</template>

<script setup lang="ts">

const email = ref('');
const password = ref('');

async function login() {
  try {
    const response = await fetch('http://localhost:4000/auth/token', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token.value}` },
      body: JSON.stringify({ email: email.value, password: password.value })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    localStorage.setItem('token', data.token);
    window.alert('Zalogowano pomyślnie');
    window.location.href = '/';
  } catch (error) {
    console.log(error);
    window.alert(error);
  }
}

const token = ref('');
onMounted(() => { token.value = localStorage.getItem('token') });
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
