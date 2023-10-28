<template>
  <div>
    <h1>Login</h1>
    <form action="/login" method="post">
      <v-text-field label="Login" name="login" type="text"></v-text-field>
      <v-text-field label="Hasło" name="password" type="password"></v-text-field>
      <v-btn color="#2e8b57" type="submit">Zaloguj</v-btn>
    </form>
  </div>
</template>

<script setup lang="ts">

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