<script setup lang="ts">
import { supabase } from '@/supabase'
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
import { defineProps } from 'vue'
import type { Database, Tables } from '@/supabaseTypes';
import { RouterLink, useRoute } from 'vue-router/auto';
import CardFilm from '@/components/CardFilm.vue';
const route = useRoute('/celebrite/[id]');

defineProps<Database["public"]["Tables"]["films"]["Row"]>()

let { data: data, error } = await supabase
  .from('films')
  .select(`
      *,
      celebrite(*),
      genre(*),
      saga(*)
    `)
  .eq('populaire', true); // Ajout de cette ligne pour filtrer les films populaires;
console.log("data films", data);

if (error) {
  console.error("erreur rquete films avec celebrite", error);
}

const tableauFilm = data ?? [];

</script>



<template>
  <main class="min-h-screen flex flex-col">
    <!-- Section de présentation -->
    <section class="bg-slate-800 text-white text-center py-20">
      <h2 class="text-3xl font-bold mb-2">Bienvenue sur Dahafilm !</h2>
      <p>Explorez les films les plus populaires, les nouveautés et plus encore!</p>
    </section>

    <!-- Grille de films populaires -->
    <section class="py-10">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-xl font-semibold mb-6">Films Populaires</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <RouterLink v-for="film in tableauFilm" :to="{ name: '/films/[id]', params: { id: film.id_film } }">
            <CardFilm v-bind="film" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Pied de page -->
   
  </main>
</template>
