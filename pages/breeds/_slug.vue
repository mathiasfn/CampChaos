<template>
  <div class="container grid gap-y-8">
    <div>
      <h1>{{ breed.content.name }}</h1>
      <div>{{ breed.content.description }}</div>
    </div>

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
    const breedResponse = await $storyblok.get(`cdn/stories/breeds/${params.slug}`, {
      'cv': new Date().getTime()
    });
    const pigsPromise = $storyblok.get('cdn/stories', {
      'starts_with': 'pigs/',
      'filter_query[breed][in]': breedResponse.data.story.uuid,
      'resolve_relations': 'pig.breed,pig.litter,pig.mother,pig.father',
      'cv': new Date().getTime()
    });
    const breedsPromise = $storyblok.get('cdn/stories', {
      'starts_with': 'breeds/',
      'cv': new Date().getTime()
    });

    const [pigsResponse, breedsResponse] = await Promise.all([pigsPromise, breedsPromise]);

    return {
      breed: breedResponse.data.story,
      breeds: breedsResponse.data.stories,
      pigs: pigsResponse.data.stories,
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
