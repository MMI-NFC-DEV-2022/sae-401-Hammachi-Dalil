<script setup lang="ts">
import FormKit from '@/components/FormKit.vue';
import { supabase } from '@/supabase'
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
</script>

<template>
  <main>
    <h1 class="text-center text-red-800 font-semibold">Page d'accueil</h1>
    <FormKit />
  </main>
</template>
