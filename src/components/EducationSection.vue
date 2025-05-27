<template>
  <section id="education" class="scroll-mt-8">
    <div class="mb-4">
      <h2 class="text-xl font-semibold mb-2 text-[#ccd6f6]">Education</h2>
      <div class="flex flex-col gap-4">
        <div v-for="edu in education" :key="edu.school" class="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 mb-8">
          <div class="text-[#64ffda] text-sm">{{ edu.date }}</div>
          <div>
            <div class="font-medium text-[#64ffda]">{{ edu.school }}</div>
            <div class="text-[#ccd6f6]">{{ edu.degree }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  education: {
    type: Array,
    required: true
  }
})
</script> 