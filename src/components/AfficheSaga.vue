<script setup lang="ts">
import { defineProps } from 'vue'
import type { Database, Tables } from '@/supabaseTypes';
// defineProps<Tables<'films'> & {celebrite:Tables<'celebrite'>}>()
defineProps<Database["public"]["Tables"]["saga"]["Row"] & { films: Tables<'films'>[] }>();
</script>

<template>
    <ul class="m-4">
        <li class="text-2xl font-bold mb-4">{{ libelle }}</li>
        <li class="flex justify-center">
            <img :src="image ?? undefined" alt="Image de la saga"
                class="w-72 h-auto sm:w-96 rounded-lg shadow-lg border border-gray-200" />
        </li>

        <p class="mt-4 mb-2 text-lg font-semibold">Films qui font partie de la saga {{ libelle }} :</p>
        <li v-for="unFilm in films" :key="unFilm.id_film" class="m-4">
            <RouterLink :to="{ name: '/films/[id]', params: { id: unFilm.id_film } }"
                class="hover:text-blue-500 transition duration-300 ease-in-out">
                <p class="text-md font-medium">Nom : {{ unFilm?.titre }}</p>
                <img :src="unFilm?.affiche ?? undefined" alt="Affiche du film"
                    class="w-72 h-auto sm:w-96 rounded-lg shadow-md border border-gray-200 mt-2" />
            </RouterLink>
        </li>
    </ul>
</template>
