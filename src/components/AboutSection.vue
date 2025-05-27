<template>
  <section id="about" class="scroll-mt-8">
    <div class="mb-4">
      <h2 class="text-xl font-semibold mb-2 text-[#ccd6f6]">About</h2>
      <div class="flex flex-col gap-4">
        <p class="mb-4">
            I’m a developer passionate about building intelligent systems and backend solutions that are not only performant and scalable but also grounded in real-world impact. My work often lives at the intersection of backend engineering and artificial intelligence, where I get to merge algorithmic rigor with clean, maintainable code.
        </p>
        <p class="mb-4">
            Currently, I’m a Master’s student in Artificial Intelligence at Yeshiva University, while also serving as a Supplementary Instructor for an introductory Data Science course. I help students grasp key machine learning concepts and practical applications of R programming in statistical modeling and exploratory data analysis.
        </p>
        <p class="mb-4">
            Previously, I’ve worked in a variety of development roles contributing to backend systems, payment gateway integrations, and mobile applications. At CGA Technologies, I improved database efficiency and API latency, while at CodeVirtus, I developed an NPM package for seamless PesePay integration. My experience spans Java, Python, Spring Boot, and more recently, applied deep learning projects.
        </p>
        <p>
            In my free time, I’m usually exploring computer vision ideas, mentoring others, or working on personal projects. I’m always eager to learn, build, and push the boundaries of what intelligent systems can do.
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