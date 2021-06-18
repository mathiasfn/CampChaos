<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        CampChaos
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
if (process.server) {
 import { Client } from "@notionhq/client"
}
/*
const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_TEST_DATABASE_ID*/

export default {
  created() {
    console.log('created config', this.$config);
  },
  mounted() {
    console.log('created config', this.$config);
    console.log('process.env.NOTION_KEY', process.env.NOTION_KEY);
    console.log('process.env.NOTION_TEST_DATABASE_ID', process.env.NOTION_TEST_DATABASE_ID);
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
