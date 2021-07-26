// npm install storyblok-js-client
import Storyblok from 'storyblok-js-client'

export default async ({ app, $config }, inject) => {
  // init with access token
  const storyblok = new Storyblok({
    accessToken: $config.STORYBLOK_ACCESS_TOKEN,
  })

  inject('storyblok', storyblok)
}
