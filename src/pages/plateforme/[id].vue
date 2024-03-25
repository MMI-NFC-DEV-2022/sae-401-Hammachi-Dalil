<script setup lang="ts">
import AfficheFilm from '@/components/AfficheFilm.vue';
import { supabase } from "@/supabase";
import { useRoute } from 'vue-router/auto';
import AffichePlateforme from '@/components/AffichePlateforme.vue';
const route = useRoute('/films/[id]');
console.log("route.params.id", route.params.id);


console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
let { data: data, error } = await supabase
    .from('plateforme')
    .select(`*,
        films(*)
    `)
    .eq('id_plateforme', route.params.id)
    .single();

console.log("data plateforme", data);

    if (error) {
      console.error("erreur requête films avec celebrite", error);
    }


</script>

<template>
  <div class="margin-auto justify-center">  
    <AffichePlateforme v-bind="data" />
  </div>
</template>