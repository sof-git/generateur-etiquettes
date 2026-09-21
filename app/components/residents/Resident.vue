<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="auto">
        <div class="text-headline-large">{{ title }}</div>
      </v-col>
    </v-row>
    <v-row>
      <PicturesList :pictures-list="residentsPictureList" :originalImage="pictureTemplate"/>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <span class="ma-auto text-headline-medium">Changer de page</span><v-switch v-model="switchPage" thumb-color="primary"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <tableSheet v-if="switchPage"/>
        <pictureSheet v-else/>
      </v-col>
      <v-col cols="4">
        <v-card class="ma-5 px-5 d-flex flex-column align-center">
          <v-card-title class="text-center"> Résident </v-card-title>
          <v-img
            elevation="5"
            class="border-thin"
            :src="residentPicture.src as string"
            width="300"
            height="300"
          ></v-img>
          <div class="w-100">
            <v-file-input
              v-model="file"
              label="Choisissez une photo"
              accept="image/*"
              @change="onFileChange(residentPicture, file)"
            />

            <v-text-field
              v-model="residentPicture.name"
              label="Ajouter le nom"
            />
          </div>

          <v-card-actions class="w-100 justify-center">
            <v-btn :disabled="residentPicture.name ? false : true" @click="addResident(residentPicture,residentsPictureList)"> Créer </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { title, residentPicture, residentsPictureList, file, addResident,pictureTemplate,switchPage } =
  useResident();
const { onFileChange } = useUpload();
</script>

<style lang="css" scoped>
.sheet {
  padding: 7mm;
  width: 210mm;
  height: 297mm;
}
</style>
