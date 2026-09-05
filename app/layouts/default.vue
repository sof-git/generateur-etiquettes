<template>
    <v-layout>
        <v-app-bar>
            <v-app-bar-title>{{ homeTitle }}</v-app-bar-title>
        </v-app-bar>
    <v-navigation-drawer class="bg-navBackground" permanent>
        <v-list>
            <v-list-item v-for="nav in navigation" :title="nav" @click="menu = nav"></v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-main class="bg-background">
        <slot/>
        </v-main>
    </v-layout>

</template>

<script setup lang="ts">
const { homeTitle,menu,navigation } = useHome();
</script>

<style></style>