<template>
  <div>
    <h1>Stwórz konto</h1>
    <form action="/register" method="post">
      <v-text-field label="Login" name="login" type="text" v-model="name"></v-text-field>
      <v-text-field label="Email" name="email" type="email" v-model="email"></v-text-field>
      <v-text-field label="Hasło" name="password" type="password" v-model="password"></v-text-field>
      <v-text-field label="Powtórz hasło" name="password2" type="password" v-model="password2"></v-text-field>
      <v-btn color="#2e8b57" @click="register()">Stwórz konto</v-btn>
    </form>
  </div>
</template>

<script setup lang="ts">
const name = ref('');
const email = ref('');
const password = ref('');
const password2 = ref('');

async function register() {
  if (password.value !== password2.value)
    return window.alert('Hasła nie są takie same');
  try {
    const response = await fetch('http://localhost:4000/auth/register', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token.value}` },
      body: JSON.stringify({ name: name.value, email: email.value, password: password.value })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    window.alert('Zarejestrowano pomyślnie');
    window.location.href = '/login';
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