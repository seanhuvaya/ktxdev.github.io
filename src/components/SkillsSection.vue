<template>
  <section id="skills" class="scroll-mt-8">
    <div class="mb-4">
      <h2 class="text-xl font-semibold mb-6 text-[#ccd6f6]">Skills</h2>
      <div class="grid gap-6 md:grid-cols-2">
        <div v-for="skill in skills" :key="skill.category" class="bg-[#112240] rounded-xl shadow-lg p-6 flex flex-col gap-3 hover:shadow-2xl transition-shadow duration-200">
          <div class="font-semibold text-[#64ffda] flex items-center text-lg mb-1">
            <component :is="getIcon(skill.category)" class="w-7 h-7 mr-3 text-[#64ffda]" />
            {{ skill.category }}
          </div>
          <div class="flex flex-wrap gap-2 mt-1">
            <span v-for="item in skill.items" :key="item.name" class="bg-[#233554] text-[#64ffda] px-3 py-1 rounded-full text-sm font-medium shadow hover:bg-[#64ffda] hover:text-[#233554] transition-colors duration-200 cursor-pointer flex items-center">
              <component v-if="item.icon" :is="item.icon" class="w-5 h-5 mr-1" />
              {{ item.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CodeIcon from './icons/CodeIcon.vue'
import FlaskIcon from './icons/FlaskIcon.vue'
import DatabaseIcon from './icons/DatabaseIcon.vue'
import SettingsIcon from './icons/SettingsIcon.vue'
import PythonIcon from './icons/PythonIcon.vue'
import JavaIcon from './icons/JavaIcon.vue'
import SqlIcon from './icons/SqlIcon.vue'
import RIcon from './icons/RIcon.vue'
import PandasIcon from './icons/PandasIcon.vue'
import DockerIcon from './icons/DockerIcon.vue'

defineProps({
  skills: {
    type: Array,
    required: true
  }
})

const getIcon = (category) => {
  if (category.includes('Programming')) return CodeIcon
  if (category.includes('Machine Learning')) return FlaskIcon
  if (category.includes('Data Management')) return DatabaseIcon
  return SettingsIcon
}
</script> 