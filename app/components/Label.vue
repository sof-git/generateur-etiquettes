<template>
    <div class="rounded-lg d-flex align-center justify-center label mx-1" :class="`label-${size}`">
        <v-img 
            class="rounded-circle photo"
            :src="img.src as string"
            alt="User Image"
            aspect-ratio="1"
        ></v-img>
    </div>
</template>

<script setup lang="ts">
const { img } = usePicture()
type LabelSize = 'large' | 'small'

defineProps<{
  size: LabelSize
}>()
</script>
<style scoped>
div{
    background: #fff3cc;
width: 30mm;
  height: 103.4mm;
  border: 2px solid black;
}


.label {
  width: 90px;
  border: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: center;
}

.label-large {
 height: 310.2px;
}

.label-small {
  height: 153.9px;
}


.photo {
  width: 200.4px;
  height: 89.4px;
  border-radius: 50%;
}
</style>