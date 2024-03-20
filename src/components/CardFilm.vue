<script setup lang="ts">
import { defineProps } from 'vue'
import type { Database, Tables } from '@/supabaseTypes';
// Utilisation de defineProps pour définir les props attendus par le composant
defineProps <Database["public"]["Tables"]["films"]["Row"] & {celebrite:Tables<'celebrite'>[]} & {genre:Tables<'genre'>[]}  & {saga:Tables<'saga'>[]}>()
</script>

<template>
    <div class="m-4 bg-gray-300 rounded-xl flex flex-wrap shadow-lg hover:shadow-2xl hover:scale-105 transition-transform transition-shadow duration-300 ease-in-out">
        <img :src="affiche ?? undefined" class="h-auto rounded-t-xl"/>
        <div class="text-slate-700 p-4">
            <h3 class="text-xl font-semibold mb-2">{{ titre }}</h3>
        </div>
        <!-- Vous pouvez ajouter ici d'autres éléments comme la liste des célébrités, genres, et sagas si nécessaire -->
    </div>
</template>
