<template>
  <div class="pictures-list">
    <div
      v-for="(picture, index) in picturesList"
      :key="picture.id"
      class="picture-item"
    >
      <div class="picture-wrapper" @click="selectPicture(picture,originalImage)">
        <v-img :src="picture.src" width="200" height="200" cover rounded="lg" />
        <v-btn
          class="delete-btn"
          icon="mdi-delete"
          size="small"
          color="error"
          @click="removePicture(index as number, picturesList)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps(['picturesList','originalImage']);
console.log(props);
const { removePicture, selectPicture } = usePicture();
</script>

<style scoped>
.pictures-list {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.picture-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.picture-wrapper {
  position: relative;
}

.delete-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  opacity: 0;
  transition: opacity 0.2s;
}

.picture-wrapper:hover .delete-btn {
  opacity: 1;
}
</style>
