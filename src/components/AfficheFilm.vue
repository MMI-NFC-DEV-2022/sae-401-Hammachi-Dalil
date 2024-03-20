<script setup lang="ts">
import { defineProps } from 'vue'
import type { Database, Tables } from '@/supabaseTypes';
import { RouterLink, useRoute } from 'vue-router/auto';
const route = useRoute('/celebrite/[id]');

// defineProps <Tables<'films'> & {celebrite:Tables<'celebrite'>}>()
defineProps <Database["public"]["Tables"]["films"]["Row"] & {celebrite:Tables<'celebrite'>[]} & {genre:Tables<'genre'>[]}  & {saga:Tables<'saga'>[]}>()


</script>

<template>
    <ul>
        <div class="flex justify-center">
            <img :src="banniere ?? undefined" class=""/>
        </div>
        <p class="m-4 flex justify-center text-2xl font-bold text-white">{{ titre }}</p>
        <p class="m-4 text-white"> {{ synopsis }}</p>
        <p class="m-4 text-white">{{ date_de_sortie }}</p>
        <p class="m-4 text-white" v-for="uneSaga in saga">
            <RouterLink :to="{name:'/saga/[id]', params: {id:uneSaga.id_saga}}"> 
            {{ uneSaga.libelle }}
            </RouterLink>
        </p>
            <p class="text-white">Acteur qui ont joué dans {{ titre }}</p>
       <ul>
           <li class="m-4 grid" v-for="uneCelebrite in celebrite">
                <RouterLink :to="{name:'/celebrite/[id]', params: {id:uneCelebrite.id_celebrite}}"> 
                   <p class="text-white"> Nom : {{ uneCelebrite?.nom }} </p> 
                       <img :src="uneCelebrite?.image ?? undefined" class="w-16"/>
                </RouterLink> 
            </li>
    </ul>
    </ul>
</template>@/supabaseTypes

