import { innCalc } from "./functions.js";
import { createApp } from "https://stastikh.github.io/homework/js13-homework8/node_modules/vue/dist/vue.esm-browser.prod.js"

const appConfig = {
    data() {
        return {
            search: ''
        }
    },
    computed: {
        drawInn(){ 
            return innCalc(this.search)    
        }
    }
}


createApp(appConfig).mount('#app');
