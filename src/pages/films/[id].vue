<script setup lang="ts">
import AfficheFilm from '@/components/AfficheFilm.vue';
import { TypesFilm } from '@/type';
import { supabase } from "/supabase.ts";
import { useRoute } from 'vue-router/auto';
const route = useRoute('/films/[id]');
console.log("route.params.id", route.params.id);


console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
let { data: data, error } = await supabase
    .from('films')
    .select(`
      *,
      celebrite(*),
      genre(*),
      saga(*)
    `)
    .eq('id_film', route.params.id)
    .single();

console.log("data films", data);

    if (error) {
      console.error("erreur requête films avec celebrite", error);
    }


</script>

<template>
  <main>Cette page est index.vue de Film </main>
  <div class="margin-auto justify-center">  
    <AfficheFilm v-bind="data" />
  </div>
</template>