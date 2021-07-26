// npm install storyblok-js-client
import moment from 'moment'

export default async ({ app, $config }, inject) => {
  moment.locale('da');
  inject('moment', moment)
}
