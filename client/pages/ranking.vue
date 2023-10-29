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
        <td>{{ user.rating }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
