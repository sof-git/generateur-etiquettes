<template>
  <v-img 
      class="photo border-dashed"
      :src="labelImg.src as string"
      alt="User Image"
      aspect-ratio="1"
  ></v-img>  
</template>

<script setup lang="ts">
const { labelImg } = usePicture();
</script>

<style scoped>
.photo {
  width: 30mm;
  height: 30mm;
  border-radius: 50%;
  flex: 0 0 30mm;
  box-sizing: border-box;
}
</style>