<script setup lang="ts">
import AfficheFilm from '@/components/AfficheFilm.vue';
import { supabase } from "/supabase.ts";
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
  <main>Cette page est index.vue de Film </main>
  <div class="margin-auto justify-center">
    <RouterLink  v-for="film in tableauFilm" :to="{name:'/films/[id]', params: {id:film.id_film}}">
      <CardFilm v-bind="film" style="margin: 3vh; display: flex;"/>
    </RouterLink>  
  </div>
</template>