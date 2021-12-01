import { innCalc } from "./functions.js";
/* import { createApp } from "./vue/dist/vue.esm-browser.prod.js" */

import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.23/vue.esm-browser.prod.min.js"

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
