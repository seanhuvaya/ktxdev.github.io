<template>
  <section id="about" class="scroll-mt-8">
    <div class="mb-4">
      <h2 class="text-xl font-semibold mb-2 text-[#ccd6f6]">About</h2>
      <div class="flex flex-col gap-4">
        <p class="mb-4">
          I am a mid-level software engineer with robust backend development experience and advanced studies in artificial intelligence. I have successfully built high-performance applications and scalable integrations, including an NPM package for payment gateways. I am currently pursuing a master's degree in AI, and with strong proficiency in Python, R, and AI frameworks, I am well-positioned to make significant contributions to innovative AI projects.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const about = ref(null)

defineProps({
  about: {
    type: String,
    required: true
  }
})


</script> 