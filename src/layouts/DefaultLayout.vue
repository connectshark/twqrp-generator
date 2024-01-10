<template>
  <header>
    <div class="max-w-5xl w-11/12 mx-auto flex items-center justify-between gap-4 py-6">
      <div>
        <router-link to="/">
          <img class=" w-10" src="../assets/logo.png" alt="logo">
        </router-link>
      </div>
      <ul>
        <li v-for="item in items" :key="item.url">
          <router-link :to="item.url">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </header>
  <main><slot/></main>
  <footer class=" border-t border-primary/10">
    <div class="max-w-5xl w-11/12 mx-auto py-6 text-xs text-center">
      <p>Released under the MIT License.</p>
      <p>Copyright<i class='bx bx-copyright'></i>2024 Chambers</p>
    </div>
  </footer>
</template>

<script setup>
const items = [
  {
    url: '/contact',
    name: '聯繫我'
  }
]
</script>