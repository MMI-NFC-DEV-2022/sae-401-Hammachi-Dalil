<script setup lang="ts">
import { defineProps } from 'vue'
import type { Database, Tables } from '@/supabaseTypes';
// defineProps <Tables<'films'> & {celebrite:Tables<'celebrite'>}>()
defineProps <Database["public"]["Tables"]["films"]["Row"] & {celebrite:Tables<'celebrite'>[]} & {genre:Tables<'genre'>[]}  & {saga:Tables<'saga'>[]}>()


</script>

<template>
    <ul class="m-4">
        <img :src="affiche ?? undefined" class="w-72 sm:w-10"/>
        <li class="m-4">Titre : {{ titre }}</li>
    </ul>
</template>@/supabaseTypes