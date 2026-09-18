<template>
  <div class="card border-xl rounded-xl border-orangeBorder pa-2">
    <div class="pictos-container">
      <v-img class="picto" src="/img/Petit déjeuner manger repas.png" />
      <v-img class="picto" src="/img/Déjeuner manger repas.png" />
      <v-img class="picto" src="/img/diner.png" />
    </div>
    <v-card-item>

      <v-img
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
}
.pictos-container {
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 226px;
}

.picto {
  width: 70px;
  height: 70px;
  flex: 1;
}
</style>
