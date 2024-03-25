<script setup lang="ts">
import AfficheFilm from '@/components/AfficheFilm.vue';
import { supabase } from "@/supabase";
import { useRoute } from 'vue-router/auto';
import AfficheSaga from '@/components/AfficheSaga.vue';
const route = useRoute('/films/[id]');
console.log("route.params.id", route.params.id);


console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
let { data: data, error } = await supabase
    .from('saga')
    .select(`*,
        films(*)
    `)
    .eq('id_saga', route.params.id)
    .single();

console.log("data saga", data);

    if (error) {
      console.error("erreur requête films avec saga", error);
    }


</script>

<template>
  <main>Cette page est index.vue de Film </main>
  <div class="margin-auto justify-center">  
    <AfficheSaga v-bind="data" />
  </div>
</template>