<template>
  <div class='border rounded shadow p-4 grid grid-cols-none gap-4'>
    <h3>Racer</h3>
    <ul>
      <NuxtLink v-for='breed in breeds' :key='breed.id' :to='{ name: "breeds-slug", params: { slug: breed.slug } }' class='hover:text-green-500'>
        <li>{{ breed.content.name }}</li>
      </NuxtLink>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BreedSidebarList',
  props: {
    breeds: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
