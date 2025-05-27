<template>
  <div class="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 max-w-7xl mx-auto p-8">
    <div class="lg:sticky lg:top-8 h-fit flex flex-col justify-between gap-8">
      <div>
        <Header />
        <Navigation 
          :sections="sections" 
          :active-section="activeSection"
          @scroll="scrollToSection" 
        />
      </div>
      
      <SocialLinks :links="socialLinks" />
    </div>
    
    <div class="flex flex-col gap-16">
      <AboutSection />
      <ExperienceSection :jobs="jobs" />
      <EducationSection :education="education" />
      <ProjectsSection :projects="projects" />
      <SkillsSection :skills="skills" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import SocialLinks from './components/SocialLinks.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import GitHubIcon from './components/icons/GitHubIcon.vue'
import LinkedInIcon from './components/icons/LinkedInIcon.vue'
import DribbbleIcon from './components/icons/DribbbleIcon.vue'
import InstagramIcon from './components/icons/InstagramIcon.vue'
import GoodreadsIcon from './components/icons/GoodreadsIcon.vue'
import PythonIcon from './components/icons/PythonIcon.vue'
import JavaIcon from './components/icons/JavaIcon.vue'
import SqlIcon from './components/icons/SqlIcon.vue'
import RIcon from './components/icons/RIcon.vue'
import PandasIcon from './components/icons/PandasIcon.vue'
import DockerIcon from './components/icons/DockerIcon.vue'
import PyTorchIcon from './components/icons/PyTorchIcon.vue'
import ScikitLearnIcon from './components/icons/ScikitLearnIcon.vue'
import NumpyIcon from './components/icons/NumpyIcon.vue'
import MatplotlibIcon from './components/icons/MatplotlibIcon.vue'
import PostgresIcon from './components/icons/PostgresIcon.vue'
import MysqlIcon from './components/icons/MysqlIcon.vue'
import AwsIcon from './components/icons/AwsIcon.vue'
import RestApiIcon from './components/icons/RestApiIcon.vue'
import ComputerVisionIcon from './components/icons/ComputerVisionIcon.vue'
import MachineLearningIcon from './components/icons/MachineLearningIcon.vue'

const sections = [
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'experience', name: 'Experience' },
  { id: 'education', name: 'Education' },
  { id: 'projects', name: 'Projects' }
]

const activeSection = ref('about')

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/ktxdev',
    icon: GitHubIcon
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/seanhuvaya',
    icon: LinkedInIcon
  },
]

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', icon: PythonIcon },
      { name: 'R', icon: RIcon },
      { name: 'Java', icon: JavaIcon },
      { name: 'SQL', icon: SqlIcon }
    ]
  },
  {
    category: 'Machine Learning & Data Science Tools',
    items: [
      { name: 'PyTorch', icon: PyTorchIcon },
      { name: 'Scikit-learn', icon: ScikitLearnIcon },
      { name: 'Pandas', icon: PandasIcon },
      { name: 'Numpy', icon: NumpyIcon },
      { name: 'Matplotlib', icon: MatplotlibIcon },
    ]
  },
  {
    category: 'Data Management',
    items: [
      { name: 'PostgreSQL', icon: PostgresIcon },
      { name: 'MySQL', icon: MysqlIcon }
    ]
  },
  {
    category: 'Other Technical Skills',
    items: [
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'Docker', icon: DockerIcon },
      { name: 'AWS', icon: AwsIcon },
      { name: 'RESTful APIs', icon: RestApiIcon }
    ]
  }
]

const jobs = [
  {
    date: 'Aug 2024 – Present',
    title: 'Supplementary Instructor - Introduction to Data Science',
    company: 'Yeshiva University',
    link: '',
    description: '• Tutored students in R programming for statistical modeling, data manipulation, and data science applications, reinforcing practical machine learning techniques.\n• Assisted students with key data science and ML concepts, including clustering, logistic regression, linear regression, and exploratory data analysis.\n• Guided students in applying machine learning methods to real-world datasets, strengthening analytical and research skills.',
    technologies: ['R', 'Machine Learning', 'Data Science']
  },
  {
    date: 'Oct 2022 – Aug 2023',
    title: 'Software Engineer',
    company: 'CGA Technologies',
    link: '',
    description: '• Enhanced MySQL database efficiency, reducing API latency by over 10% for data-driven operations.\n• Developed and implemented two custom Vue.js UI components, streamlining code reusability and improving testing efficiency across the platform.\n• Engineered more than 10 feature improvements for the Social Cash Transfer Programme, utilizing Java to deliver robust application enhancements.',
    technologies: ['Java', 'Vue.js', 'MySQL']
  },
  {
    date: 'Jun 2021 – Nov 2022',
    title: 'Backend Developer',
    company: 'CodeVirtus',
    link: '',
    description: '• Designed an NPM package to facilitate integration with PesePay payment gateway, achieving 40+ weekly downloads and expanding system interoperability.\n• Contributed to a seven-member agile team, customizing open-source projects and collaborating to align solution with client requirements.\n• Developed an image bank feature, enabling real-time image resizing with Java and SpringBoot, optimizing performance.',
    technologies: ['Java', 'SpringBoot', 'NPM']
  },
]

const education = [
  {
    school: 'Yeshiva University',
    degree: 'Master of Science, Artificial Intelligence',
    date: 'Expected Dec 2025'
  },
  {
    school: 'University of Zimbabwe',
    degree: 'Bachelor of Business Studies and Computing Science',
    date: 'Aug 2017 – Dec 2022'
  }
]

const projects = [
  {
    title: 'Deep Learning–Based Canine Cardiomegaly Detection',
    description: 'Designed and trained a ResNet-101-based CNN to detect six key anatomical points in canine thoracic X-rays for automated Vertebral Heart Size (VHS) estimation. Achieved a mean absolute error (MAE) of 0.798 and MAPE of 8.64% on a real-world dataset of 2,000 dog radiographs. Developed a custom PyTorch pipeline with data augmentation, keypoint regression, and real-time inference capabilities.',
    image: '',
    link: '#',
    technologies: ['PyTorch', 'Deep Learning', 'Computer Vision', 'CNN']
  }
]

const aboutSection = ref(null)
const experienceSection = ref(null)
const projectsSection = ref(null)

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id
    }
  })
}, {
  threshold: 0.1,
  rootMargin: '-20% 0px -80% 0px'
})

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  element.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  // Wait for the next tick to ensure all components are mounted
  nextTick(() => {
    const sections = ['about', 'experience', 'projects']
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })
  })
})

onUnmounted(() => {
  observer.disconnect()
})
</script>


