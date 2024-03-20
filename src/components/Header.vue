<script setup lang="ts">
</script>

<template>
    <header class="bg-gray-800 text-white p-4">
        <RouterLink to="/" class="mx-4">Accueil</RouterLink>
        <RouterLink to="/connexion" class="mx-4">Connexion</RouterLink>
        <RouterLink to="/films" class="mx-4">Films</RouterLink>
        <RouterLink to="/films/edit/:id?" class="mx-4">Ajouter un film</RouterLink>
    </header>
</template>