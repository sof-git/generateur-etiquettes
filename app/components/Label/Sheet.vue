<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12">
        <PicturesList :pictures-list="picturesList" :original-image="labelImg"/>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-btn
          color="primary"
          @click="generatePdf"
        >
          Exporter en PDF
        </v-btn>          
        <div ref="sheetRef" class="sheetContainer">
          <v-sheet
            class="sheet d-flex flex-wrap"
            color="white"
            elevation="3"
            rounded="lg"
          >
            <Label v-for="(size, index) in labels" :key="index" :size="size" />
            <div class="picContainer ml-1">
              <Picture v-for="index in 6" :key="`picture-${index}`" />
            </div>
          </v-sheet>
        </div>      
      </v-col>
        <v-navigation-drawer width="450" permanent location="right">
          <PictureCropper/>
        </v-navigation-drawer>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { labels, labelImg,picturesList } = usePicture();
const { exportPdf } = usePdfExport()
const sheetRef = ref<HTMLElement | null>(null)
const generatePdf = async () => {
  if (!sheetRef.value) return

  await exportPdf(sheetRef.value,'landscape')
}
</script>

<style lang="css" scoped>
.sheet {
  padding: 7mm;
  column-gap: 2.1px;
  row-gap: 2.1px;
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

.sheetContainer{
  width: min-content;
}
</style>
