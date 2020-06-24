import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

Vue.component('Pallete', {
    props: ['color', 'index'],
    template: `
    <div class="colors__pallete" @click="copyColor(index)">
        <div class="colors__preview" v-bind:style="{backgroundColor: color}"></div>
        <h3 class="colors__hex">{{color}}</h3>
    </div>`,
    methods: {
        copyColor(index) {
            this.$emit('copy', index);
        }
    }

})

new Vue({
    el: '#app',
    data() {
        return {
            colors: ['#EEEDF0', '#A1B5C1', '#F9ACA7', '#68747D', '#CF365F'],
            copiedColor: '',
            showMessage: false
        }
    },
    methods: {
        generateColors() {
            const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
            let generatedColors = []
            for (let i = 0; i < 5; i += 1) {
                let color = '#';
                for (let j = 0; j < 6; j += 1) {
                    color += hex[Math.floor(Math.random() * hex.length)];
                }
                generatedColors.push(color);
            }
            this.colors = generatedColors;
        },
        copyColorHex(index) {
            this.copiedColor = this.colors[index];

            const range = document.createRange();
            const selection = document.getSelection();
            const elem = document.querySelector('.colors').childNodes[index]


            range.selectNodeContents(elem);
            selection.removeAllRanges();
            selection.addRange(range);

            document.execCommand('copy');
            selection.removeAllRanges();

            this.showMessage = true;

            setTimeout(() => {
                this.showMessage = false;
            }, 1000);
        }
    }
})