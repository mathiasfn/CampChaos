// npm install storyblok-js-client
import Storyblok from 'storyblok-js-client'

// init with access token
const storyblok = new Storyblok({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})

export default ({ app }, inject) => {
  inject('storyblok', storyblok)
}
