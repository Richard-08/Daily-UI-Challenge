import Vue from 'vue';
import App from './App.vue';

/* import './assets/img/home.svg';
import './assets/img/add-btn.svg';
import './assets/img/arrow-icon.svg';
import './assets/img/fullscreen-icon.svg';
import './assets/img/more-btn-clicked-bg.svg';
import './assets/img/more-icon.svg';
import './assets/img/move-icon.svg';
import './assets/img/search-icon.svg';
import './assets/img/write-icon.svg'; */

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app')