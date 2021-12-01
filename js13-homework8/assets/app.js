import { innCalc } from "./functions.js";
import { createApp } from "./vue/dist/vue.esm-browser.prod.js"

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
