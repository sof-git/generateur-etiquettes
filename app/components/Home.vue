<template>
    <v-container>
        <v-row>
            <v-col cols="auto">
                {{ homeTitle }}
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div v-if="menu === 'home'">
                    <v-btn @click="menu = 'picture'">
                    Photo / Crop
                    </v-btn>

                    <v-btn @click="menu = 'labels'">
                    Étiquettes
                    </v-btn>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <AddPicture v-if="menu === 'labels'" @back="menu = 'home'"/>
            </v-col>
        </v-row>
        <v-row>    
            <v-col cols="12">
                <PictureCropper v-if="menu === 'picture'" @back="menu = 'home'"/>
            </v-col>            
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
const { homeTitle,menu } = useHome();
</script>

<style scoped>
</style>