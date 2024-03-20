const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
export interface TypesFilm {
    id_film?: number;
    titre?: string;
    date_de_sortie?: Date;
    synopsis?: string;
    affiche?: string;
    bande_annonce?: string;
    saga?: number;
    duree?: number;
    genre?: number;
    celebrite?: number;
}

import type { Database, Tables } from '@/supabaseTypes';
// defineProps <Tables<'films'> & {celebrite:Tables<'celebrite'>}>()
export type typeFilm = Database["public"]["Tables"]["films"]["Row"] & {celebrite:Tables<'celebrite'>}