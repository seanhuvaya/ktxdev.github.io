<template>
  <div class="flex gap-4">
    <a v-for="link in links" 
       :key="link.name" 
       :href="link.url" 
       :aria-label="link.name"
       class="text-[#8892b0] transition-colors duration-200 hover:text-[#64ffda]">
      <component :is="link.icon" class="w-5 h-5" />
    </a>
  </div>
</template>

<script setup>
defineProps({
  links: {
    type: Array,
    required: true
  }
})
</script> 