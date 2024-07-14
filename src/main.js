// Import Vue
import { createApp } from 'vue'
import App from './App.vue'

// Import BalmUI
import BalmUI from 'balm-ui'
import BalmUIPlus from 'balm-ui-plus'
import 'balm-ui-css'

// Import local CSS
import './assets/main.css'

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faTwitch,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

// Create the app
const app = createApp(App)

// Add the FontAwesome library
library.add(
  faGithub,
  faInstagram,
  faLink,
  faLinkedin,
  faTwitter,
  faTwitch,
  faYoutube
)

app.component('font-awesome-icon', FontAwesomeIcon)

// Add BalmUI
app.use(BalmUI)
app.use(BalmUIPlus)

// Mount app
app.mount('#app')
