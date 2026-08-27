<template>
  <v-app>
    <v-layout style="min-height: 100vh">

      <v-main class="bg-grey-lighten-4">
        <v-container
          fluid
          class="fill-height d-flex align-center justify-center"
        >
          <v-sheet 
            class="d-flex flex-wrap"
            width="891"
            height="630"
            color="white"
            elevation="3"
            rounded="lg"
          >
          <Label
            v-for="(size, index) in labels"
            :key="index"
            :size="size"
          />
          </v-sheet>
        </v-container>
      </v-main>

      <v-navigation-drawer
        location="right"
        permanent
        width="320"
      >
        <v-container>
          <AddPicture/>
        </v-container>
      </v-navigation-drawer>

    </v-layout>
  </v-app>
</template>
<script setup lang="ts">
import AddPicture from '../components/AddPicture.vue';
import { useComp } from '../composables/addPicture';
import Label from '../components/Label.vue';
const { currentMenu, showAddPicture,labels } = useComp();
</script>
