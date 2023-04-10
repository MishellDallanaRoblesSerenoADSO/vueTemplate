export default{
    name: "my-boton",
    template: /*html*/`
        <p v-for="(val, name, id) in lista" :key="id">
            {{val.nombre}} <sup v-text="val.edad"></sup>
        </p>
        <hr>
        <input type="text" v-model="storageConfig.id">
        <div v-text="storageConfig.id"></div>
    `,
    data(){
        return{
            lista:[
                {
                    nombre: "Miguel",
                    edad: 25
                },
                {
                    nombre: "Nini",
                    edad: 17
                },
                {
                    nombre: "Jesus",
                    edad: 25
                }
            ],
        }
    },
    props:{
        config: Object
    }
}