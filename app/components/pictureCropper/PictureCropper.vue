<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card max-width="800" class="mx-auto pa-4 d-flex flex-column" elevation="4" rounded="lg">
          <v-card-title class="text-center text-h5">
            Photo / Crop
          </v-card-title>

          <v-card-text>
            <div class="d-flex justify-center">
              <cropper
                class="cropper"
                :canvas="true"
                :src="cropperImg.src as string"
                :stencil-component="CircleStencil"
                :stencil-props="{
                  aspectRatio: 10 / 12,
                }"
                @change="change"
              />
            </div>
          </v-card-text>
          <v-card-actions class="d-flex flex-column w-100">
            <v-file-input
              v-model="file"
              label="Choisissez une photo"
              accept="image/*"
              hide-details
              density="compact"
              class="mr-4 w-100"
              @change="onFileChange(cropperImg, file)"
            />
            <v-text-field
              v-model="cropperImg.name"
              label="Ajoutez un nom"
              class="w-100"
            ></v-text-field>
            <v-btn
              class="bg-secondary"
              :disabled="!cropperImg.src && !cropperImg.name"
              @click="
                cropperImg.src
                  ? addPictureToArray(
                      'circle',
                      cropperImg.name,
                      picturesList,
                    )
                  : null
              "
              >Ajouter la photo
            </v-btn
            >
            <v-btn :disabled="!cropperImg.src" color="primary">
              <a :href="croppedImage.src as string" download="croppedImage.png">
                Exporter
              </a>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <PicturesList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { Cropper, CircleStencil } from "vue-advanced-cropper";
const {
  cropperImg,
  change,
  croppedImage,
  addPictureToArray,
  picturesList,
  file,
} = usePicture();
const { onFileChange } = useUpload();
</script>

<style scoped>
.cropper {
  width: 400px;
  height: 400px;
  background: #ddd;
}
</style>
