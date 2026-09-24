<template>
  <v-btn
    color="primary"
    @click="generatePdf"
  >
    Exporter en PDF
  </v-btn>     
  <div ref="sheetRef" class="sheetContainer" >
    <v-sheet class="sheet" color="white" elevation="3" rounded="lg">
      <v-container fluid>
        <v-row>
          <v-col cols="12" class="d-flex flex-row justify-space-around ga-1 pa-0">
              <v-img v-for="(index) in 6" :key="index"
                class="border-lg border-blackBorder"
                :src="pictureTemplate.src"
              >
              </v-img>
          </v-col>
        </v-row>
        <v-row class="justify-center align-start">
          <v-col cols="6" class="d-flex flex-column justify-center">
            <Placemat class="ma-auto"/>   
              <v-col class="mt-2" cols="3">
                <v-row class="justify-center">
                  <v-col
                    class="d-flex justify-center align-center"
                    v-for="index in 4"
                    :key="index"
                    cols="5"
                  >
                    <v-img
                      class="border-lg border-blackBorder"
                      :src="pictureTemplate.src"
                      width="100%"
                      aspect-ratio="1"
                      cover
                    />
                  </v-col>
                </v-row>
              </v-col>                                  
          </v-col>
          <v-col cols="6">
            <v-row class="justify-center">
              <v-col offset="4" cols="8">
                <v-img 
                v-for="(index) in 2" :key="index"
              class="border-lg border-blackBorder ma-1"
              :src="pictureTemplate.src"
              >
            </v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-img
                  class="border-lg border-blackBorder"
                :src="pictureTemplate.src"
                ></v-img>
              </v-col>                      
            </v-row>
          
          </v-col>     
                  
        </v-row>

      </v-container>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
const { pictureTemplate } = useResident();
const { exportPdf } = usePdfExport()
const sheetRef = ref<HTMLElement | null>(null)
const generatePdf = async () => {
  if (!sheetRef.value) return

  await exportPdf(sheetRef.value,'portrait')
}
</script>

<style scoped lang="css">
.sheet {
  padding: 7mm;
  width: 210mm;
  height: 297mm;
}
</style>