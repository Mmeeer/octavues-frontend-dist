import colors from 'vuetify/es5/util/colors'
import axios from 'axios';
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/octavues-frontend-dist/'
  }
} : {}

module.exports = {
  ...routerBase
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  generate: {
    routes: function (callback) {
      axios.get('https://api.octavues.me/allid/')
      .then((res) => {
        let blog, project, events;
        if(res.data.data.blog){
          blog = res.data.data.blog.map((blog) => {
            return '/blog/' + blog._id
          });
        }
        if(res.data.data.project){
          project = res.data.data.project.map(function(project){
            return '/projects/' + project._id
          });
        }
        if(res.data.data.event){
          events = res.data.data.event.map(function(evnt){
            return '/events/' + evnt._id
          })
        }
        let tmp = blog.concat(project);
        if(events && events.length){
          let gonret = tmp.concat(events);
          callback(null, gonret);
        } else callback(null, tmp);
      })
      .catch(callback);
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    apiUrl: 'https://api.octavues.me'
  },
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/favicon16.png'},
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap&subset=cyrillic,cyrillic-ext"
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css?family=Yellowtail&display=swap"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/loading.vue',
  /*
  ** Global CSS
  */
  css: [
    'vue-plyr/dist/vue-plyr.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/fontawesome.js",
    '~/plugins/vue-plyr',
    { src: '~/plugins/vue2quill', ssr: false},
    { src: "~/plugins/vue-croppa", ssr: false},
    { src: "~/plugins/vue-copy", ssr: false}
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-user-agent',
    'cookie-universal-nuxt'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'localhost:8080/'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3,
      maindark: '#222222'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
