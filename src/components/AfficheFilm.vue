<script setup lang="ts">
import { defineProps } from 'vue'
import type { Database, Tables } from '@/supabaseTypes';
import { RouterLink, useRoute } from 'vue-router/auto';
const route = useRoute('/celebrite/[id]');

// defineProps <Tables<'films'> & {celebrite:Tables<'celebrite'>}>()
defineProps <Database["public"]["Tables"]["films"]["Row"] & {celebrite:Tables<'celebrite'>[]} & {genre:Tables<'genre'>[]}  & {saga:Tables<'saga'>[]}>()


</script>

<template>
    <ul class="m-4">
        <li class="m-4">Titre {{ titre }}</li>
        <li class="m-4"> {{ synopsis }}</li>
        <img :src="affiche ?? undefined" class="w-72 sm:w-10"/>
        <li class="m-4">{{ date_de_sortie }}</li>
        <li class="m-4" v-for="uneSaga in saga">
            <RouterLink :to="{name:'/saga/[id]', params: {id:uneSaga.id_saga}}"> 
            {{ uneSaga.libelle }}
            </RouterLink>
        </li>
            <p>Acteur qui ont joué dans {{ titre }}</p>
       <ul>
           <li class="m-4" v-for="uneCelebrite in celebrite">
                <RouterLink :to="{name:'/celebrite/[id]', params: {id:uneCelebrite.id_celebrite}}"> 
                   <p> Nom : {{ uneCelebrite?.nom }} </p> 
                       <img :src="uneCelebrite?.image ?? undefined" class="w-72 sm:w-10"/>
                </RouterLink> 
            </li>
    </ul>
    </ul>
</template>@/supabaseTypes

