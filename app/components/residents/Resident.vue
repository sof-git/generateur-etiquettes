<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="auto">
        <div class="text-headline-large">{{ title }}</div>
      </v-col>
    </v-row>
    <v-row>
      <PicturesList :pictures-list="residentsPictureList" :originalImage="pictureTemplate"/>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <ColorPicker/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <v-btn
          color="primary"
          @click="generatePdf"
        >
          Exporter en PDF
        </v-btn>           
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <v-sheet elevation="2">
          <v-tabs v-model="tab" class="bg-navBackground">
            <v-tab value="placemat">page 1</v-tab>
            <v-tab value="pictures">page 2</v-tab>
          </v-tabs>
            <v-divider></v-divider>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="placemat">
                <div ref="sheetRef1">
                  <tableSheet/>
                </div>
              </v-tabs-window-item>
              <v-tabs-window-item value="pictures">
                <div ref="sheetRef2">
                  <pictureSheet />
                </div>
              </v-tabs-window-item>
            </v-tabs-window>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-card class="px-5 d-flex flex-column align-center">
          <v-card-title class="text-center"> Résident </v-card-title>
          <v-img
            elevation="5"
            class="border-thin"
            :src="residentPicture.src as string"
            width="300"
            height="300"
          ></v-img>
          <div class="w-100">
            <v-file-input
              v-model="file"
              label="Choisissez une photo"
              accept="image/*"
              @change="onFileChange(residentPicture, file)"
            />

            <v-text-field
              v-model="residentPicture.name"
              label="Ajouter le nom"
            />
          </div>

          <v-card-actions class="w-100 justify-center">
            <v-btn color="primary" :disabled="residentPicture.name ? false : true" @click="addResident(residentPicture,residentsPictureList)"> Créer </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { title, residentPicture, residentsPictureList, file, addResident,pictureTemplate,switchPage,tab } = useResident();
const { onFileChange } = useUpload();
const { exportPdf } = usePdfExport();

const generatePdf = async () => {
  if (!sheetRef1.value || !sheetRef2.value) return

  await exportPdf(sheetRef1.value, 'portrait')

  tab.value = 'pictures'

  await nextTick()

  await new Promise(resolve => setTimeout(resolve, 500))

  await exportPdf(sheetRef2.value, 'portrait')
}
const sheetRef1 = ref<HTMLElement | null>(null)
const sheetRef2 = ref<HTMLElement | null>(null)

</script>

<style lang="css" scoped>
.sheet {
  padding: 7mm;
  width: 210mm;
  height: 297mm;
}
</style>
