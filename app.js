import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
import myButon from './components/myButon.js';
import myh1 from './components/myh1.js';
import main from './main.js';

let app = createApp(main);
app.component(myButon.name, myButon);
app.component(myh1.name, myh1);


app.mount("#app");