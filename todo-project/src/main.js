//import { initializeApp } from "firebase/app";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// const firebaseConfig = {
//   apiKey: "AIzaSyCCA7OKSsgZWqVpM22hWbtBeoETp2Dngbc",
//   authDomain: "vuetify-practice-de3bb.firebaseapp.com",
//   projectId: "vuetify-practice-de3bb",
//   storageBucket: "vuetify-practice-de3bb.appspot.com",
//   messagingSenderId: "505762052437",
//   appId: "1:505762052437:web:5a61b08077d78e578e97dc"
// };

// initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
