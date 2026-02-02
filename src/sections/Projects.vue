<script setup>
import projects from "../data/projects";
</script>

<template>
  <section id="projects" class="py-20 px-6 max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold mb-10 text-primary">Projects</h2>

    <div class="grid md:grid-cols-2 gap-8">
      <div v-for="p in projects" :key="p.name" class="bg-surface p-6 rounded">
        <h3 class="text-xl font-semibold">{{ p.name }}</h3>
        <p class="text-muted mt-2">{{ p.focus }}</p>
        <p class="text-sm mt-2 text-primary">{{ p.stack }}</p>

        <a :href="p.url" target="_blank" class="inline-block mt-4 underline text-primary">
          Visit →
        </a>
      </div>
    </div>
  </section>
</template>
