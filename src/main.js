import { createApp, h } from "vue"
import App from "./App.vue"
import router from "@/router"
import store from "./store"
import "./styles/index.css"
import "bulma/css/bulma.css"
import Toaster from '@meforma/vue-toaster';

require("dotenv").config()

const app = createApp({
  render: () => h(App)
})

app.config.productionTip = false
app.use(router)
app.use(store)
app.use(Toaster)

app.mount("#app")

