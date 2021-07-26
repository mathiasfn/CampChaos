<template>
  <div class="container grid grid-cols-3 gap-8">
    <div v-if='fullscreen' class='z-50 bg-gray-900 fixed w-full h-full flex items-center justify-center left-0 top-0 right-0 bottom-0 bg-gray-600'>
      <img :src='activeImage'>
      <div class='absolute bg-white border-black cursor-pointer flex hover:bg-gray-200 items-center justify-center m-4 p-3 right-0 rounded-full top-0' style='width: 50px; height: 50px' @click='fullscreen = false'>
        <fa-icon icon='times'></fa-icon>
      </div>
    </div>

    <div class='col-span-1 grid gap-4'>
      <template v-if='pig.images && pig.images.length'>
        <div v-if='activeImage' class='relative'>
          <img class='w-full' :src='activeImage'>
          <div class='absolute bg-white border-black cursor-pointer flex hover:bg-gray-200 items-center justify-center m-4 p-3 right-0 rounded-full top-0' @click='fullscreen = true'>
            <fa-icon icon='search'></fa-icon>
          </div>
        </div>

        <div class='grid grid-cols-4 gap-4'>
          <img v-for='image in pig.images' :src='image.filename' alt='' :class='{"opacity-50 cursor-pointer": activeImage !== image.filename}' @click='activeImage = image.filename'>
        </div>
      </template>

      <img v-else src='https://via.placeholder.com/250x250?text=Billeder+er+på+vej' alt='' class='w-full'>
    </div>
    <div class='col-span-2'>
      <div class='flex'>
        <div class='grid gap-2 flex-grow mr-8'>
          <h2>{{ pig.name }}</h2>

          <template v-if='pig.status === "for_sale"'>
            <h4 v-if='pig.price' class='text-green-600'>{{ pig.price }} DKK</h4>
            <div v-if='pig.ready_for_sale'>Salgsklar: {{ $moment(pig.ready_for_sale, 'YYYY-MM-DD').format('LL') }}</div>
          </template>

          <div v-html='pig.description' class='break-words whitespace-pre-wrap'></div>
          <hr>
          <div v-if='pig.breed'>
            Race:
            <NuxtLink :to='{name: "breeds-slug", params: {slug: pig.breed.slug}}'>
              <span class='text-blue-500'>{{pig.breed.name}}</span>
            </NuxtLink>
          </div>

          <div v-if='pig.mother'>
            Mor:
            <NuxtLink :to='{name: "pigs-slug", params: {slug: pig.mother.slug}}'>
              <span class='text-blue-500'>{{pig.mother.name}}</span>
            </NuxtLink>
          </div>

          <div v-if='pig.father'>
            Far:
            <NuxtLink :to='{name: "pigs-slug", params: {slug: pig.father.slug}}'>
              <span class='text-blue-500'>{{pig.father.name}}</span>
            </NuxtLink>
          </div>
        </div>
        <div style='width: 200px'>
          <BreedSidebarList :breeds='breeds'></BreedSidebarList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BreedSidebarList from '@/components/BreedSidebarList'

export default {
  components: {
    BreedSidebarList
  },
  async asyncData({ params, $storyblok }) {
    const pigPromise = $storyblok.get(`cdn/stories/pigs/${params.slug}`, {
      'resolve_relations': 'pig.breed,pig.litter,pig.mother,pig.father',
      'cv': new Date().getTime()
    });
    const breedPromise = $storyblok.get(`cdn/stories`, {
      'starts_with': 'breeds/',
      'cv': new Date().getTime()
    });

    const [pigResponse, breedResponse] = await Promise.all([pigPromise, breedPromise])

    const story = pigResponse.data.story;
    let activeImage = null;

    if (story.content.images?.length) {
      activeImage = story.content.images[0].filename
    }

    return {
      story: pigResponse.data.story,
      breeds: breedResponse.data.stories,
      activeImage
    }
  },
  data() {
    return {
      fullscreen: false
    }
  },
  computed: {
    pig() {
      return this.story.content
    },
  },
  created() {
    if (process.client) {
      window.slug = this;
    }
  },
  mounted() {
    document.addEventListener('keyup', this.closeFullscreen);
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.closeFullscreen);
  },
  methods: {
    closeFullscreen(e) {
      if (e.keyCode === 27 || e.code === 'Escape') {
        this.fullscreen = false;
      }
    }
  }
}
</script>

<style>
</style>
