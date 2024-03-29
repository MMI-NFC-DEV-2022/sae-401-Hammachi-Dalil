<script setup lang="ts">
import { defineProps } from 'vue'
import type { Database, Tables } from '@/supabaseTypes';
import { RouterLink, useRoute } from 'vue-router/auto';
const route = useRoute('/celebrite/[id]');

defineProps<Database["public"]["Tables"]["films"]["Row"] & { celebrite: Tables<'celebrite'>[] } & { genre: Tables<'genre'>[] } & { saga: Tables<'saga'>[] } & { plateforme: Tables<'plateforme'>[] } & { support_physique: Tables<'support_physique'>[] } & { filmsupport: Tables<'filmsupport'>[] }>();
</script>

<template>
    <div class="bg-gray-800 ">
        <div class="flex justify-center">
            <img :src="banniere ?? undefined" alt="Bannière du film" class="text-white rounded-lg shadow-xl max-h-96" />
        </div>
        <h1 class="mt-4 mb-4 flex justify-center text-4xl font-bold text-white">{{ titre }}</h1>
        <div class="flex flex-wrap justify-around items-start px-4">
            <div class="w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
                <p class="text-white text-lg my-4 px-4 break-words">{{ synopsis }}</p>
                <p class="text-white text-lg my-4 px-4">Date : {{ date_de_sortie }}</p>
                <div class="my-4 px-4 flex">
                    <p class="text-white text-lg">Saga:</p>
                    <p class="text-white text-lg underline cursor-pointer ml-2 hover:text-blue-600"
                        v-for="uneSaga in saga" :key="uneSaga.id_saga">
                        <RouterLink :to="{ name: '/saga/[id]', params: { id: uneSaga.id_saga } }">
                            {{ uneSaga.libelle }}
                        </RouterLink>
                    </p>

                </div>
                <div class="flex text-white text-lg px-4">
                    <p>Genre : </p>
                    <p v-for="(filmgenre, index) in genre" :key="index" class="pl-2">
                        {{ filmgenre.libelle }}
                        <span v-if="index < genre.length - 1"> / </span>
                    </p>
                </div>

            </div>
            <div class="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 mt-8 md:mt-0">
                <p class="text-white ml-4">Acteurs ayant joué dans {{ titre }} :</p>
                <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    <li v-for="uneCelebrite in celebrite" :key="uneCelebrite.id_celebrite"
                        class="hover:scale-105 transition-transform ease-in-out">
                        <RouterLink :to="{ name: '/celebrite/[id]', params: { id: uneCelebrite.id_celebrite } }">
                            <img :src="uneCelebrite?.image ?? undefined" alt="Photo de l'acteur" class="rounded-lg" />
                            <p class="text-center text-white">{{ uneCelebrite?.nom }}</p>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex justify-center flex-wrap my-8">
            <p class="w-full text-center text-white mb-4">Disponible sur :</p>
            <div v-for="unePlateforme in plateforme" :key="unePlateforme.id_plateforme" class="m-4">
                <RouterLink :to="{ name: '/plateforme/[id]', params: { id: unePlateforme.id_plateforme } }">
                    <img :src="unePlateforme?.image ?? undefined" alt="Logo de la plateforme"
                        class="h-12 md:h-16 rounded-2xl hover:scale-105 transition-transform ease-in-out" />
                </RouterLink>
            </div>
        </div>
        <div>
            <p class="text-white text-center text-lg">Supports physiques :</p>
            <ul class="flex justify-center flex-wrap">
                <li v-for="unSupport in support_physique" :key="unSupport.id_support_physique"
                    class="text-white m-4 hover:scale-105 transition-transform ease-in-out">
                    {{ unSupport.libelle }}
                </li>
            </ul>
            <ul class="flex justify-center flex-wrap">
                <div v-for="leSupport in filmsupport">
                    <li class="text-white mx-10">
                        {{ leSupport.prix }} €
                    </li>
                    <li class="text-white">
                        <a :href="leSupport.lien_externe ?? ''" target="_blank"
                            class="underline hover:text-blue-600">Acheter</a>
                    </li>
                </div>
            </ul>





        </div>
    </div>
</template>
