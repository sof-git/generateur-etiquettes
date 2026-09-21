<template>
  <div class="card border-xl rounded-xl border-orangeBorder  pa-2 d-flex flex-column align-center">
    <div class="pictos-container">
      <v-img class="picto" src="/img/Petit déjeuner manger repas.png" />
      <v-img class="picto" src="/img/Déjeuner manger repas.png" />
      <v-img class="picto" src="/img/diner.png" />
    </div>
    <v-card-item>
      <v-img
        class="border-xl border-orangeBorder"
        :src="pictureTemplate.src" width="200" height="200"/>
    </v-card-item>
  </div>
</template>

<script setup lang="ts">
const {pictureTemplate} = useResident();
</script>

<style scoped>
.card {
  box-sizing: content-box;
  width:fit-content;
}
.pictos-container {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.picto {
  width: 90px;
  height: 90px;
}
</style>
