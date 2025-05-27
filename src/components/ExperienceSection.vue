<template>
  <section id="experience" class="scroll-mt-8" ref="experience">
    <div class="mb-4">
      <h2 class="text-xl font-semibold mb-2 text-[#ccd6f6]">Experience</h2>
      <div>
        <div v-for="job in jobs" :key="job.company" class="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 mb-8">
          <div class="text-[#64ffda] text-sm">{{ job.date }}</div>
          <div>
            <h3 class="mb-2">
              <a :href="job.link" target="_blank" rel="noopener noreferrer" class="text-[#ccd6f6] no-underline transition-colors duration-200 hover:text-[#64ffda]">
                {{ job.title }} · {{ job.company }} ↗
              </a>
            </h3>
            <div v-for="line in job.description.split('\n')" :key="line" class="text-[#8892b0]">
              {{ line }}
            </div>
            <div class="flex flex-wrap gap-2 mt-4">
              <span v-for="tech in job.technologies" 
                    :key="tech" 
                    class="bg-[rgba(100,255,218,0.1)] text-[#64ffda] px-3 py-1 rounded-full text-sm">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
        <a href="#" class="inline-block text-[#64ffda] no-underline mt-4 transition-colors duration-200 hover:text-[#ccd6f6]">View Full Résumé</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  jobs: {
    type: Array,
    required: true
  }
})

const experience = ref(null)

defineExpose({
  experience
})
</script> 