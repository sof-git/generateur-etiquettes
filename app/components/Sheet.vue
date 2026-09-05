<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
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
      </v-col>
    </v-row>
  </v-container>





</template>

<script setup lang="ts">
const { labels,file,onFileChange} = usePicture();

</script>

<style lang="css" scoped></style>
