<template>
  <v-container>
    <v-card
      max-width="800"
      class="mx-auto pa-4"
      elevation="4"
      rounded="lg"
    >
      <v-card-title class="text-center text-h5">
        Photo / Crop
      </v-card-title>

      <v-card-text>
        <div class="d-flex justify-center">
          <cropper
            class="cropper"
            :canvas="true"
            :src="img.src as string"
            :stencil-component="CircleStencil"
            :stencil-props="{
              aspectRatio: 10 / 12
            }"
            @change="change"
          />
        </div>
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-file-input
          v-model="file"
          label="Ajoutez une photo"
          accept="image/*"
          hide-details
          density="compact"
          class="mr-4"
          style="max-width: 280px"
          @change="onFileChange"
        />

        <v-btn
          :disabled="!img.src"
          color="primary"
        >
          <a
            :href="croppedImage.src as string"
            download="croppedImage.png"
          >
            Exporter
          </a>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  back: []
}>();
import { Cropper, CircleStencil } from 'vue-advanced-cropper'
const { img,change,file,onFileChange,croppedImage } = usePicture();
</script>

<style scoped>
.cropper {
    width: 400px;
  height: 400px;
  background: #DDD;
}
</style>
