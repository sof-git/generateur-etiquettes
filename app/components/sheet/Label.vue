<template>
    <div class="rounded-xl d-flex align-center justify-center label" :class="`label-${size}`">
        <Picture/>
    </div>
</template>

<script setup lang="ts">
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
}


.label {
  width: 30mm;
  border: 3px solid black

}

.label-large {
   height: 103.4mm;
}

.label-small {
  height: 66.8mm;
}
</style>