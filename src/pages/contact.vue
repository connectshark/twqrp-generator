<template>
  <DefaultLayout>
    <section class="max-w-xl w-11/12 mx-auto bg-white p-6 rounded-md shadow">
      <h2 class="text-2xl/loose">聯繫我</h2>
      <ul class=" text-center">
        <li class=" inline-block" v-for="item in list" :key="item.icon">
          <a :href="item.link" target="_blank">
            <i class='bx bx-md' :class="item.icon"></i>
          </a>
        </li>
      </ul>
    </section>
  </DefaultLayout>
  </template>
  
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
const list = [
  {
    link: 'https://github.com/connectshark',
    icon: 'bxl-github'
  },
  {
    link: 'mailto:contact@nosegates.com',
    icon: 'bxl-gmail'
  }
]
</script>