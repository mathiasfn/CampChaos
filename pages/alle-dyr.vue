<template>
  <div class="container grid gap-y-8">
    <h1>Alle dyr</h1>

    <PigList :pigs='pigs' :breeds='breeds'></PigList>
  </div>
</template>

<script>

import PigList from '@/components/PigList'

export default {
  components: {
    PigList
  },
  async asyncData({ params, $storyblok }) {
    const pigsPromise = $storyblok.get('cdn/stories', {
      'starts_with': 'pigs/',
      'resolve_relations': 'pig.breed,pig.litter,pig.mother,pig.father',
      'cv': new Date().getTime()
    });
    const breedsPromise = $storyblok.get('cdn/stories', {
      'starts_with': 'breeds/',
      'cv': new Date().getTime()
    });

    const [pigsResponse, breedsResponse] = await Promise.all([pigsPromise, breedsPromise]);
    return {
      pigs: pigsResponse.data.stories,
      breeds: breedsResponse.data.stories,
    }
  },
  created() {
    if (process.client) {
      window.all = this;
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style>
</style>
