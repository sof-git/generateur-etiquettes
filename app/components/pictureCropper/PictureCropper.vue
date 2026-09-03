<template>
    <v-container>
        <v-row>
            <v-col cols="1">
                <v-btn @click="emit('back')">
                    Retour
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div class="picture-cropper">
                    <cropper
                        class="cropper"
                        :canvas="true"
                        :src="img.src as string"
                        :stencil-component="CircleStencil"
                        :stencil-props="{
                        aspectRatio: 10/12
                        }"
                        @change="change"
                    ></cropper>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col offset-md="3" cols="12" md="3">
                <v-file-input v-model="file" label="Ajoutez une photo" accept="image/*" @change="onFileChange"></v-file-input>
            </v-col>
            <v-col cols="12" md="3">
                <v-btn><a :href="croppedImage.src as string" download="croppedImage">Export</a></v-btn>
            </v-col>            
        </v-row>
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
