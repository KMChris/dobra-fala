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

const email = ref('')
const password = ref('')

async function login() {
  try {
    const response = await fetch('http://localhost:4000/auth/token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email.value, password: password.value })
    });
    const data = await response.json();
    localStorage.setItem('token', data.token);
    console.log(data.token);
    window.location.href = '/';
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
