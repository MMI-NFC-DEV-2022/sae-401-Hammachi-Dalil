<script setup lang="ts">
</script>

<template>
  <main>
    <h1 class="text-center text-green-800 font-semibold">Composant d'un formulaire formkit</h1>
    <FormKit :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-grey-600 italic',
                    outer: 'py-2',
                    error: 'text-red-600 italic',
                    },
                
              }" 
              submit-label="Envoyer"
              type="form"
              >

      <FormKit      
        label="Nom"   
        type="text"
        help="Choisissez un nom d'utilisateur"
        validation="required|matches:/^[a-zA-Z]*\d+[a-zA-Z]*$/"
        value="@FormKit"
        :validation-messages="{
          matches: 'Votre nom d\'utilisateur contient des caractères interdits',
        }" 
      />
      
    </FormKit>
  </main>
</template>

