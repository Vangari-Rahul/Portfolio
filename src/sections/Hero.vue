<template>
  <section class="min-h-screen flex items-center justify-center text-center px-6">
    <div>
      <h1 class="text-4xl md:text-6xl font-bold">
        Rahul <span class="text-primary">Vangari</span>
      </h1>

      <p class="mt-4 text-lg text-muted">
        Senior Software Engineer | JavaScript | Vue.js | Node.js
      </p>

      <p class="mt-6 max-w-2xl mx-auto">
        Open to complex challenges. Focused on scalable solutions.<br />
        Building large-scale SaaS systems with Vue.js, Node.js, and MySQL.
      </p>

      <div class="flex gap-4 justify-center mt-8">
        <a href="#projects" class="btn-primary">View Projects</a>
        <a href="/resume.pdf" download class="btn-outline">Download Resume</a>
        <a href="https://github.com/Vangari-Rahul" target="_blank" class="btn-outline">GitHub</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.btn-primary {
  @apply bg-primary text-black px-6 py-2 rounded font-semibold;
}
.btn-outline {
  @apply border border-primary text-primary px-6 py-2 rounded;
}
</style>
