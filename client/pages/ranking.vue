<template>
  <h1>Ranking</h1>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Miejsce</th>
        <th class="text-left">Użytkownik</th>
        <th class="text-left">Ocena</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, i) in users"
          :key="user.id">
        <td>{{ i + 1 }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.score }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
const users = ref([]);
const token = ref('');
onMounted(async () => {
  token.value = localStorage.getItem('token');
  try {
    const response = await fetch('http://localhost:4000/users/search', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token.value}` },
      body: JSON.stringify({})
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    users.value = data;
    console.log(data);
  } catch (error) {
    console.log(error);
    window.alert(error);
  }
});
</script>

<style scoped>

</style>
