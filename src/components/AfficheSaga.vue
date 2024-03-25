<script setup lang="ts">
import { defineProps } from 'vue'
import type { Database, Tables } from '@/supabaseTypes';
defineProps<Database["public"]["Tables"]["saga"]["Row"] & { films: Tables<'films'>[] }>();
</script>

<template>
    <div class="bg-slate-800">
        <h2 class="text-2xl font-bold mb-4 text-center text-white">{{ libelle }}</h2>
        <div class="flex justify-center mb-4">
            <img :src="image ?? undefined" alt="Image de la saga"
                class="w-72 h-auto sm:w-96 rounded-lg shadow-lg" />
        </div>

        <p class="text-lg font-semibold text-center mb-6 text-white">Films qui font partie de la saga {{ libelle }} :</p>
        <!-- Grille pour les films -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="unFilm in films" :key="unFilm.id_film"
                class="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform ease-in-out">
                <RouterLink :to="{ name: '/films/[id]', params: { id: unFilm.id_film } }"
                    class="hover:text-blue-500 transition duration-300 ease-in-out block">
                    <img :src="unFilm?.affiche ?? undefined" alt="Affiche du film"
                        class="w-72 h-auto sm:w-96 mx-auto mt-4 rounded-lg" />
                    <div class="p-4">
                        <p class="text-md font-medium text-center">Nom : {{ unFilm?.titre }}</p>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
