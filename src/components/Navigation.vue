<template>
  <nav>
    <ul>
      <li v-for="section in sections" :key="section.id">
        <a :href="'#' + section.id" 
           :class="[
             'block py-2 text-[#8892b0] no-underline transition-colors duration-200',
             activeSection === section.id ? 'text-[#64ffda] font-medium' : 'hover:text-[#64ffda]'
           ]"
           @click.prevent="scrollToSection(section.id)">
          {{ section.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  sections: {
    type: Array,
    required: true
  },
  activeSection: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['scroll'])

const scrollToSection = (sectionId) => {
  emit('scroll', sectionId)
}
</script> 