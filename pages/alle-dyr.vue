<template>
  <div class="container grid gap-y-8">
    <h1>Alle dyr</h1>

    <div class='grid grid-cols-4 gap-4'>
      <AnimalCard v-for='animal in stories' :animal='animal.content' :key='animal.id'></AnimalCard>
    </div>
  </div>
</template>

<script>

import AnimalCard from '@/components/AnimalCard'

export default {
  components: {
    AnimalCard
  },
  async asyncData({ params, $storyblok }) {
    const response = await $storyblok.get('cdn/stories', {
      'starts_with': 'pigs/',
    });
    return {
      stories: response.data.stories,
    }
  },
  created() {
    if (process.client) {
      window.all = this;
    }
  },
  mounted() {
  }
}
</script>

<style>
</style>
