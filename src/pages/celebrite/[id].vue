<script setup lang="ts">
import AfficheFilm from '@/components/AfficheFilm.vue';
import { supabase } from "@/supabase";
import { useRoute } from 'vue-router/auto';
import AfficheCelebrite from '@/components/AfficheCelebrite.vue';
const route = useRoute('/films/[id]');
console.log("route.params.id", route.params.id);


console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
let { data: data, error } = await supabase
    .from('celebrite')
    .select(`*,
        films(*)
    `)
    .eq('id_celebrite', route.params.id)
    .single();

console.log("data films", data);

    if (error) {
      console.error("erreur requête films avec celebrite", error);
    }


</script>

<template>
  <div class="margin-auto justify-center">  
    <AfficheCelebrite v-bind="data" />
  </div>
</template>