<script setup>

</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/index"></router-link>
      <router-link to="/about-me"></router-link>
      <router-link to="/hobbies-interests"></router-link>
      <router-link to="/it-experience"></router-link>
      <router-link to="/picture-gallery"></router-link>

    </nav>

    <router-view />
  </div>
</template>


<style scoped>

</style>