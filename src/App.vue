<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">

      <nav class="my-2">
        <RouterLink to="/" class="mx-4">Accueil</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

