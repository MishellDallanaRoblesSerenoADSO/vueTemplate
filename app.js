import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
import navar from './components/navar.js';
import home from './components/home.js';
import main from './main.js';
import headphones from './components/headphones.js';



let app = createApp(main);
app.component(navar.name, navar);
app.component(home.name, home);
app.component(headphones.name, headphones);

app.mount("#app");