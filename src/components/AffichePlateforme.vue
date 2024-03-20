<script setup lang="ts">
import { defineProps } from 'vue'
import type { Database, Tables } from '@/supabaseTypes';
// import { RouterLink } from 'vue-router/auto';
// defineProps <Tables<'films'> & {celebrite:Tables<'celebrite'>}>()
defineProps <Database["public"]["Tables"]["plateforme"]["Row"]  & {films:Tables<'films'>[]}>()


</script>

<template>
    <ul class="m-4">
        <li class="m-4">Titre {{ libelle }}</li>
        <img :src="image ?? undefined" class="w-72 sm:w-10"/>

<p> Films présent sur {{ libelle }}</p>
        <li class="m-4" v-for="unFilm in films">
                <RouterLink :to="{name:'/films/[id]', params: {id:unFilm.id_film}}"> 
                   <p> Nom : {{ unFilm?.titre }} </p> 
                       <img :src="unFilm?.affiche ?? undefined" class="w-72 sm:w-10"/>
                </RouterLink> 
            </li>
    </ul>
</template>