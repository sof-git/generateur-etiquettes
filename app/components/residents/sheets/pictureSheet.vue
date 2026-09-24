<template>
    <div ref="sheetRef" class="sheetContainer">
        <v-sheet class="sheet" color="white" elevation="3" rounded="lg">
            <v-container>
                <v-row>
                    <v-col
                    v-for="index in 12"
                    :key="index"
                    cols="2"
                    class="pictures-row"
                    >
                        <v-img
                            class="border-lg border-blackBorder"
                            :src="pictureTemplate.src"
                            width="100%"
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-img
                            class="border-lg border-blackBorder"
                            :src="pictureTemplate.src"
                            width="100%"
                        />                    
                    </v-col>
                    <v-col offset="2" cols="4">
                        <v-img
                        v-for="index in 2"
                        :key="index"
                        class="border-lg border-blackBorder ma-1"
                        :src="pictureTemplate.src"
                        width="100%"
                        aspect-ratio="1"
                        cover
                        />
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
.sheetContainer{
  width: min-content;
}
</style>