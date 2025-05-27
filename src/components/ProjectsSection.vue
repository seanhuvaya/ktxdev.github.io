<template>
  <section id="projects" class="scroll-mt-8" ref="projectsRef">
    <div class="mb-4">
      <h2 class="text-xl font-semibold mb-2 text-[#ccd6f6]">Projects</h2>
      <div>
        <div v-for="project in projects" 
             :key="project.title" 
             class="relative grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 mb-8 p-4 rounded-lg transition-colors duration-200 hover:bg-[rgba(100,255,218,0.1)]"
             :class="project.comingSoon ? 'opacity-60 blur-[1px] pointer-events-none' : ''">
          <img :src="project.image" :alt="project.title" class="w-full max-w-[180px] h-auto rounded mx-auto sm:mx-0"/>
          <div>
            <h3 class="mb-2 flex items-center gap-2">
              <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-[#ccd6f6] no-underline transition-colors duration-200 hover:text-[#64ffda]">
                {{ project.title }}
              </a>
              <span v-if="project.comingSoon" class="ml-2 px-2 py-1 rounded-full text-xs font-bold bg-[#64ffda] text-[#0a192f] animate-pulse shadow-lg z-10 absolute top-2 right-2 sm:static sm:ml-2">Coming Soon</span>
            </h3>
            <p>{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span v-for="tech in project.technologies" 
                    :key="tech" 
                    class="bg-[rgba(100,255,218,0.1)] text-[#64ffda] px-3 py-1 rounded-full text-sm">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const projectsRef = ref(null)

defineExpose({
  projects: projectsRef
})
</script> 