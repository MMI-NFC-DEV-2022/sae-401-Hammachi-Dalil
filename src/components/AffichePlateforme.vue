<script setup lang="ts">
import { defineProps } from 'vue'
import type { Database, Tables } from '@/supabaseTypes';
defineProps<Database["public"]["Tables"]["plateforme"]["Row"] & { films: Tables<'films'>[] }>();
</script>

<template>
    <div class="bg-slate-800 min-h-screen flex justify-center items-center">
        <div class="max-w-4xl mx-auto p-4 bg-white shadow-lg shadow-white rounded-lg">
            <div class="flex flex-col items-center">
                <h2 class="text-2xl font-bold mt-4 mb-2">{{ libelle }}</h2>
                <img :src="image ?? undefined" alt="Logo de la plateforme" class="w-48 h-48 object-contain" />
            </div>
            <p class="text-xl mt-4 mb-2 text-center">Films disponibles sur {{ libelle }} :</p>
            <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <li v-for="unFilm in films" :key="unFilm.id_film"
                    class="flex flex-col items-center bg-gray-100 p-4 rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out">
                    <RouterLink :to="{ name: '/films/[id]', params: { id: unFilm.id_film } }" class="text-center">
                        <img :src="unFilm?.affiche ?? undefined" alt="Affiche du film"
                            class="w-36 h-56 object-cover rounded-md mb-2" />
                        <p class="text-sm font-semibold">{{ unFilm?.titre }}</p>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
