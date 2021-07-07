// npm install storyblok-js-client
import Storyblok from 'storyblok-js-client'

// init with access token
const storyblok = new Storyblok({
  accessToken: 'muaujtRYxYanFxNR5SgLYQtt',
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})

export default ({ app }, inject) => {
  inject('storyblok', storyblok)
}
