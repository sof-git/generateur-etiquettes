<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div v-if="menu === 'home'">
          <v-btn color="primary" @click="menu = 'picture'">
            Photo / Crop
          </v-btn>

          <v-btn color="primary" @click="menu = 'labels'"> Étiquettes </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <Sheet v-if="menu === 'labels'" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <Resident v-if="menu === 'resident'" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { menu } = useHome();
</script>

<style scoped></style>
