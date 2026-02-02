<template>
  <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Backend />
    <Contact />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./sections/Hero.vue";
import About from "./sections/About.vue";
import Skills from "./sections/Skills.vue";
import Experience from "./sections/Experience.vue";
import Projects from "./sections/Projects.vue";
import Backend from "./sections/Backend.vue";
import Contact from "./sections/Contact.vue";
</script>
