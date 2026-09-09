<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12">
        <PicturesList/>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
          <v-sheet 
            class="sheet d-flex flex-wrap"
            color="white"
            elevation="3"
            rounded="lg"
          >
          <Label
            v-for="(size, index) in labels"
            :key="index"
            :size="size"
          />
            <div class="picContainer ml-1"
            >
              <Picture v-for="index in 6"
              :key="`picture-${index}`" />
            </div>   
        </v-sheet>
      </v-col>
      <v-col cols="2">
        <v-navigation-drawer permanent location="right">
          menu
        </v-navigation-drawer>
      </v-col>
    </v-row>
  </v-container>





</template>

<script setup lang="ts">
const { labels,labelImg } = usePicture();

</script>

<style lang="css" scoped>
.sheet {
  padding: 7mm;
column-gap : 2.1px;
row-gap    : 2.1px;
 width: 297mm;
    height: 210mm;
}

.picContainer {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 5mm;
}

</style>
