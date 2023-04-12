export default {
    name: "myhome",
    template: /*html*/`
    <section class="home">
    <div class="home-img">
        <img  :src="config.producto1" :class="one" >
    </div>

    <div class="home-text">
        <h1 v-html="config.texto1"></h1>
        <h5 v-html="config.texto2"></h5>
        <h3 v-html="config.precio"></h3>
        <a href="#" v-html="config.texto3" class="btn"></a>
    </div>
    </section>
    `,

    props:{
		config:Object
	}
}