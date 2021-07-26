<template>
  <div class="container grid gap-y-8">
    <h1>Mine dyr</h1>

    <div class='grid grid-cols-4 gap-4'>
      <PigCard v-for='animal in stories' :animal='animal.content' :key='animal.id'></PigCard>
    </div>
  </div>
</template>

<script>

import PigCard from '@/components/PigCard'

export default {
  components: {
    PigCard
  },
  async asyncData({ params, $storyblok }) {
    const response = await $storyblok.get('cdn/stories', {
      'starts_with': 'pigs/',
      'filter_query[status][in]': 'private'
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
