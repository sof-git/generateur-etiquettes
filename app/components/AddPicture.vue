<template>
  <v-navigation-drawer>
    <h2 class="text-h6 mb-6">Ajouter des étiquettes</h2>

    <div class="text-subtitle-2 mb-2">Taille</div>

    <v-btn-toggle divided mandatory class="mb-6">
      <v-btn value="small"> Petit </v-btn>

      <v-btn value="large"> Grand </v-btn>
    </v-btn-toggle>

    <v-divider class="mb-6" />

    <div class="text-subtitle-2 mb-2">Photo</div>

    <v-file-input v-model="file" label="Ajoutez une photo" accept="image/*" @change="onFileChange"></v-file-input>


    <div class="text-subtitle-2 mb-2">Bordure</div>

    <v-select
      label="Choisir une bordure"
      :items="['Aucune', 'Simple', 'Décorative']"
      variant="outlined"
      class="mb-6"
    />

    <div class="text-subtitle-2 mb-2">Quantité</div>


    <v-btn block color="primary" size="large" class="mt-6"> Générer </v-btn>
  </v-navigation-drawer>

</template>

<script setup lang="ts">
const { labels,file,onFileChange} = usePicture();

</script>

<style lang="css" scoped></style>
