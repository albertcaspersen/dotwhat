<template>
  <div class="glass-card" :style="cardStyle">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  padding: {
    type: String,
    default: '2rem'
  },
  borderRadius: {
    type: String,
    default: '2px'
  },
  backgroundColor: {
    type: String,
    default: 'rgba(255, 255, 255, 0.08)'
  },
  blur: {
    type: String,
    default: '20px'
  },
  saturation: {
    type: String,
    default: '180%'
  }
})

const cardStyle = computed(() => ({
  padding: props.padding,
  borderRadius: props.borderRadius,
  backgroundColor: props.backgroundColor,
  backdropFilter: `blur(${props.blur}) saturate(${props.saturation})`,
  WebkitBackdropFilter: `blur(${props.blur}) saturate(${props.saturation})`
}))
</script>

<style scoped>
.glass-card {
  color: white;
}
</style>

