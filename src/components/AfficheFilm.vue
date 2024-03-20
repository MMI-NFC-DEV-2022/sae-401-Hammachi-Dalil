<script setup lang="ts">
import { defineProps } from 'vue'
import type { Database, Tables } from '@/supabaseTypes';
import { RouterLink, useRoute } from 'vue-router/auto';
const route = useRoute('/celebrite/[id]');

// defineProps <Tables<'films'> & {celebrite:Tables<'celebrite'>}>()
defineProps <Database["public"]["Tables"]["films"]["Row"] & {celebrite:Tables<'celebrite'>[]} & {genre:Tables<'genre'>[]}  & {saga:Tables<'saga'>[]} & {plateforme:Tables<'plateforme'>[]} >()


</script>

<template>
        <div class="flex justify-center">
            <img :src="banniere ?? undefined" class=""/>
        </div>
        <h1 class="m-4 pb-4 flex justify-center text-6xl font-bold text-white">{{ titre }}</h1>
        <div class="flex pb-12">
        <div class="w-1/2">
        <p class="m-4 text-white w-auto pr-32"> {{ synopsis }}</p>
        <p class="m-4 text-white">Date : {{ date_de_sortie }}</p>
        <p class="m-4 text-white" v-for="uneSaga in saga">
            <RouterLink :to="{name:'/saga/[id]', params: {id:uneSaga.id_saga}}"> 
            {{ uneSaga.libelle }}
            </RouterLink>
        </p>
        </div>
        <div class="w-1/2">
            <p class="text-white ml-8">Acteur qui ont joué dans {{ titre }}</p>
       <ul class="grid grid-cols-4 gap-2">
           <li class="m-4" v-for="uneCelebrite in celebrite">
                <RouterLink :to="{name:'/celebrite/[id]', params: {id:uneCelebrite.id_celebrite}}"> 
                    <div class="hover:scale-105 transition-transform ease-in-out">
                    <img :src="uneCelebrite?.image ?? undefined" class="rounded-xl"/>
                   <p class="text-white">{{ uneCelebrite?.nom }} </p> 
                   </div>
                </RouterLink> 
            </li>
    </ul>
    </div>
    </div>
    <div v-for="unePlateforme in plateforme">
        <RouterLink :to="{name:'/plateforme/[id]', params: {id:unePlateforme.id_plateforme}}">
            <img :src="unePlateforme?.image ?? undefined" class=""/>
        </RouterLink>
    </div>
</template>

