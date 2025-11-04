<template>
  <component :is="tag" :class="headingClass" ref="headingRef">
    <template v-if="Array.isArray(lines)">
      <span 
        v-for="(line, index) in lines" 
        :key="index" 
        class="line-wrapper"
      >
        <span class="line" :ref="el => setLineRef(index, el)">{{ line }}</span>
      </span>
    </template>
    <template v-else>
      {{ text }}
    </template>
  </component>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useEntranceAnimation } from '../composables/useEntranceAnimation'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  lines: {
    type: Array,
    default: null
  },
  tag: {
    type: String,
    default: 'h1',
    validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'].includes(value)
  },
  headingClass: {
    type: String,
    default: ''
  },
  animate: {
    type: Boolean,
    default: true
  },
  animationConfig: {
    type: Object,
    default: () => ({})
  }
})

const headingRef = ref(null)
const lineRefs = []

const setLineRef = (index, el) => {
  if (el) {
    if (!lineRefs[index]) {
      lineRefs[index] = ref(null)
    }
    lineRefs[index].value = el
  }
}

// Apply entrance animation if enabled and lines are provided
if (props.animate && props.lines) {
  onMounted(() => {
    useEntranceAnimation(lineRefs, props.animationConfig)
  })
}

defineExpose({
  headingRef
})
</script>

<style scoped>
.line-wrapper {
  display: block;
  overflow: hidden;
}

.line {
  display: block;
}
</style>

