export default{
    data(){
        return{
            config:{
                imagen1:"img/main1.png",
                imagen2:"img/main2.png",
                imagen3:"img/main3.png",
                producto1:"img/product1.png",
                producto2:"img/product2.png",
                producto3:"img/product3.png",
                titulo1:"Soundbox",
                enlace:["Overview","Teach Specs","Reviews","Contact Us"],
                texto1:"Wireless <br> Headphones",
                texto2:"The smarter way to listen",
                precio:"$199.00",
                texto3:"Shop Now",
                one:'',
            },
            methods:{
                add2(){
                    
                    console.log(config.titulo1)
                }
            }
        
        }
    }
}