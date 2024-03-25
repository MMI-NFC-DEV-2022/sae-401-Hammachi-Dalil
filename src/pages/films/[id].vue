<script setup lang="ts">
import AfficheFilm from '@/components/AfficheFilm.vue';
import { supabase } from "@/supabase";
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
      saga(*),
      plateforme(*),
      support_physique(*),
      filmsupport(*)
    `)
    .eq('id_film', route.params.id)
    .single();

console.log("data films", data);

    if (error) {
      console.error("erreur requête films avec celebrite", error);
    }


</script>

<template>
  <main class="bg-slate-700">
  <div class="">  
    <AfficheFilm v-bind="data" />
  </div>
  </main>
</template>