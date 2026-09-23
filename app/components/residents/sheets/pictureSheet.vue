<template>
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
</template>

<script setup lang="ts">
const { pictureTemplate } = useResident();
</script>

<style scoped lang="css">
.sheet {
  padding: 7mm;
  width: 210mm;
  height: 297mm;
}

</style>