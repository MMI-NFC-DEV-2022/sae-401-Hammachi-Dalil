<script setup lang="ts">
import AfficheFilm from '@/components/AfficheFilm.vue';
import { supabase } from "@/supabase";
import CardFilm from '@/components/CardFilm.vue';

console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
let { data: data, error } = await supabase
    .from('films')
    .select(`
      *,
      celebrite(*),
      genre(*),
      saga(*)
    `);
console.log("data films", data);

    if (error) {
      console.error("erreur rquete films avec celebrite", error);
    }

const tableauFilm = data ?? [];
</script>

<template>
  <main class="bg-gray-700 text-white min-h-screen">Cette page est index.vue de Film 
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
    <RouterLink  v-for="film in tableauFilm" :to="{name:'/films/[id]', params: {id:film.id_film}}">
      <CardFilm v-bind="film"/>
    </RouterLink>  
  </div>
  </main>
</template>