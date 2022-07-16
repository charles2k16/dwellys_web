export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Dwellys",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Discover the world’s hub for properties you would love",
      },
      { name: "format-detection", content: "telephone=023023345" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "~/assets/css/global.css",
    "~/assets/css/element.css",
    "~/assets/css/display.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/elementUI/element-ui", "@/plugins/api.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/auth-next",
    "nuxt-material-design-icons-iconfont",
    "@nuxtjs/auth-next",
    // "nuxt-material-design-icons",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // https://sg-web-backend.herokuapp.com/api/v1
    // http://localhost:8000/api/v1
    // baseURL: 'https://newapi.dwellys.com/api/v3',
    baseURL: "http://localhost:8000/api/v3",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  // server: {
  //   port: 8000,
  // },

  // router: {
  //   middleware: ['auth'],
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: false,
          global: true,
          required: true,
          type: "Bearer",
        },
        user: {
          property: false,
          autoFetch: false,
        },
        endpoints: {
          login: { url: "/login", method: "post" },
          logout: { url: "/logout", method: "post" },
          user: false,
        },
      },
      google: {
        clientId:
          "1039031868707-iakjs1b8u7i12s3jb5l11on7uc8flkpr.apps.googleusercontent.com",
        scope: ["profile", "email"],
        codeChallengeMethod: "",
        responseType: "token id_token",
        endpoints: {
          token: "http://localhost:8000/api/v3/loginwithsocialmedia", // somm backend url to resolve your auth with google and give you the token back
          userInfo: false, // the endpoint to get the user info after you recived the token
          redirect_uri: "http://localhost:3000",
        },
      },
      facebook: {
        endpoints: {
          token: "http://localhost:8000/api/v3/loginwithsocialmedia",
          userInfo:
            "https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}",
        },
        clientId: "3270395229903696",
        scope: ["public_profile", "email"],
      },
    },
  },
};
