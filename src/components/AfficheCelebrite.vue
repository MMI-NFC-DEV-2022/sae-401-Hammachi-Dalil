<script setup lang="ts">
import { defineProps } from 'vue'
import type { Database, Tables } from '@/supabaseTypes';
defineProps<Database["public"]["Tables"]["celebrite"]["Row"] & { films: Tables<'films'>[] }>();
</script>

<template>
    <div class="bg-gray-800 min-h-screen">
        <div class="max-w-4xl mx-auto p-4">
            <div class="flex flex-col items-center mb-8">
                <h1 class="text-2xl font-bold mb-2 text-white">{{ prenom }} {{ nom }}</h1>
                <img :src="image ?? undefined" alt="Image de l'acteur"
                    class="w-48 h-auto rounded-2xl shadow-lg border-gray-200" />
                <p class="text-lg font-semibold text-white">{{ age }} ans</p>
            </div>

            <p class="text-lg font-semibold mb-4 text-white">Films dans lesquels {{ prenom }} {{ nom }} a joué :</p>
            <ul>
                <li v-for="unFilm in films" :key="unFilm.id_film" class="mb-6">
                    <RouterLink :to="{ name: '/films/[id]', params: { id: unFilm.id_film } }"
                        class="flex items-center gap-4 text-white hover:text-blue-500 transition duration-300 ease-in-out">
                        <img :src="unFilm?.affiche ?? undefined" alt="Affiche du film"
                            class="w-32 h-auto rounded-lg shadow-md hover:scale-105 hover:shadow-blue-500 transition-transform transition-shadow duration-300 ease-in-out" />
                        <p class="text-md font-medium">{{ unFilm?.titre }}</p>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
