<template>
<div style="max-width: fit-content;">
    <v-expansion-panels
    >
        <v-expansion-panel
        >
        <v-expansion-panel-title>
            Bordure
        </v-expansion-panel-title>
        <v-expansion-panel-text>
        <v-color-picker mode="hexa" v-model="borderColor"></v-color-picker>

        </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</div>
</template>

<script setup lang="ts">
const { borderColor } = useColorPicker();
</script>
<style lang="css" scoped>
</style>