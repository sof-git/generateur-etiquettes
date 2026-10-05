<template>
    <v-sheet class="sheet" color="white" elevation="3" rounded="lg">
        <v-container>
            <v-row>
                <v-col cols="12" class="d-flex flex-row justify-space-around ga-1 pa-0">
                    <v-img v-for="(index) in 6" :key="index"
                        class="border-lg"
                        :style="`border-color:${borderColor};`"
                        aspect-ratio="1"
                        cover
                        :src="pictureTemplate.src"
                    >
                    </v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="d-flex flex-row justify-space-around ga-1 pa-0">
                    <v-img v-for="(index) in 6" :key="index"
                        class="border-lg"
                        :style="`border-color:${borderColor};`"
                        aspect-ratio="1"
                        cover
                        :src="pictureTemplate.src"
                    >
                    </v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-img
                        class="border-lg ma-1 square-img"
                        :style="`border-color:${borderColor};`"
                        :src="pictureTemplate.src"
                        cover
                        width="100%"
                    />                    
                </v-col>
                <v-col offset="2" cols="4">
                    <v-img
                    v-for="index in 2"
                    :key="index"
                    class="border-lg ma-1 square-img"
                    :style="`border-color:${borderColor};`"
                    :src="pictureTemplate.src"
                    aspect-ratio="1/1"
                    cover
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>

<script setup lang="ts">
const { pictureTemplate } = useResident();
const { borderColor } = useColorPicker();
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
.square-img {
  width: 100%;
  aspect-ratio: 1 / 1;
}
</style>