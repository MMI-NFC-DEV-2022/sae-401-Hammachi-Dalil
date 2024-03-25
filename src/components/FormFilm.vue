<script setup lang="ts">
import { ref } from "@vue/reactivity";
import AfficheFilm from "@/components/AfficheFilm.vue";
import { FormKit } from "@formkit/vue";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router/auto";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code


const router = useRouter();
const films = ref ({});
const route = useRoute('/films/edit/[[id]]');

async function upsertFilm(dataForm: any, node: { setErrors: (arg0: any[]) => void; }) {
    console.log("dataForm :",dataForm);
    
    const { data, error } = await supabase.from("films").upsert(dataForm).select("id_film");
    if (error) node.setErrors([error.message])
    else {
        console.log("data :",data);
        router.push({name:"/films/edit/[[id]]", params:{id: data[0].id_film}});
    }
}

if (route.params.id) {
    const { data, error } = await supabase.from("films")
    .select("*")
    .eq("id_film", route.params.id)
    .single();
    if (error) console.error(error);
    else films.value = data;
}
</script>

<template>
    <div>
        <div class="p-2">
            <h2 class="text-2xl">
                Résultat (Prévisualisation)
            </h2>
            <AfficheFilm v-bind="films" />
        </div>
        <div class="p-2 flex justify-center">
            <FormKit @submit="upsertFilm" type="form" v-model="films" :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600 italic',
                    outer: 'py-2',
                    },
                }">
                <FormKit name="titre" label="Titre du film" />
                <FormKit name="synopsis" label="Synopsis du film" />
                <FormKit name="bande_annonce" label="bande annonce" />
                <FormKit name="affiche" label="Images du film" />
                <FormKit name="banniere" label="banniere du film" />
                <FormKit name="date_de_sortie" type="date" label="Date de sortie" />
            </FormKit>
        </div>
    </div>
</template>