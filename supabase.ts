import { createClient } from '@supabase/supabase-js'
import { ref } from 'vue'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)



// Pour tester dans la console, dé-commenter la ligne qui suit :
globalThis.supabase = supabase
console.log('supabase', supabase)

const { data } = await supabase.auth.getUser()
export const user = ref(data.user)
supabase.auth.onAuthStateChange( (evt,session)=>{
    user.value = session?.user ?? null
})
