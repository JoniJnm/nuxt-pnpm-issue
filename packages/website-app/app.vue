<template>
  <div class="app">
    <div>
      <p>Current date: {{ currentDate }}</p>
      <NuxtPage />
    </div>
  </div>
  
</template>

<script setup lang="ts">
// Global app setup can go here
import { useState } from '#imports'
const currentDate = useState('currentDate', () => new Date().toISOString())
</script>

<style>
html, body, #__nuxt, .app { height: 100%; margin: 0; }
.app { display: grid; place-items: center; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }
</style>
