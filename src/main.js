import { createApp } from "vue";
import App from "./App.vue";

import './assets/main.css'
import router from "./router";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube} from "@fortawesome/free-brands-svg-icons";

library.add(fas,faYoutube,faGithub);

createApp(App).use(router).component("fa", FontAwesomeIcon).mount('#app')
