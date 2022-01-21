import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCA7OKSsgZWqVpM22hWbtBeoETp2Dngbc",
  authDomain: "vuetify-practice-de3bb.firebaseapp.com",
  projectId: "vuetify-practice-de3bb",
  storageBucket: "vuetify-practice-de3bb.appspot.com",
  messagingSenderId: "505762052437",
  appId: "1:505762052437:web:5a61b08077d78e578e97dc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
