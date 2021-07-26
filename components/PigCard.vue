<template>
  <div class='border rounded overflow-hidden'>
    <div style='height: 250px'>
      <NuxtLink :to='detailsLink'>
        <img :src='image' alt='' class='min-h-full min-w-full object-center object-cover max-h-full'>
      </NuxtLink>
    </div>
    <div class='grid gap-y-2 p-4'>
      <h2>{{ pig.content.name }}</h2>

      <div v-if='pig.content.breed'>
        Race:
        <NuxtLink :to='{name: "breeds-slug", params: {slug: pig.content.breed.slug}}'>
          <span class='text-blue-500'>{{pig.content.breed.content.name}}</span>
        </NuxtLink>
      </div>

      <div v-if='pig.content.mother'>
        Mor:
        <NuxtLink :to='{name: "pigs-slug", params: {slug: pig.content.mother.slug}}'>
          <span class='text-blue-500'>{{pig.content.mother.content.name}}</span>
        </NuxtLink>
      </div>

      <div v-if='pig.content.father'>
        Far:
        <NuxtLink :to='{name: "pigs-slug", params: {slug: pig.content.father.slug}}'>
          <span class='text-blue-500'>{{pig.content.father.content.name}}</span>
        </NuxtLink>
      </div>

      <div>{{ description }}</div>

      <NuxtLink :to='detailsLink' class='bg-primary hover:bg-green-500 p-3 rounded text-center text-white transition-colors'>Se marsvin</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pigCard',
  props: {
    pig: {
      type: Object,
      default: null
    },
  },
  computed: {
    image() {
      if (!this.pig.content.images?.length) {
        return 'https://via.placeholder.com/250x250?text=Billede+er+på+vej'
      }

      return this.pig.content.images[0].filename
    },
    description() {
      if (this.pig.content.description?.length > 100) {
        return this.pig.content.description.slice(0, 100) + '...';
      }

      return this.pig.content.description;
    },
    detailsLink() {
      return {
        name: 'pigs-slug',
        params: {
          slug: this.pig.slug
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
