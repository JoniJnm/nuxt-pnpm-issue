<template>
  <main>
    <h1>Nuxt 3 + TypeScript + ESLint</h1>
    <p>If you see this page, your workspace app is set up.</p>
    <p>
      Node: 24 · Package manager: pnpm 10
    </p>
  </main>
</template>

<script setup lang="ts">
const now: string = new Date().toISOString()
console.debug('Page rendered at', now)
</script>

<style scoped>
main { text-align: center; padding: 2rem; }
h1 { font-size: 2rem; margin-bottom: 0.5rem; }
p { color: #555; }
</style>
