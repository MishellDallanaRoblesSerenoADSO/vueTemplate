export default{
    name: "mynav",
    template: /*html*/`
    
    <header>
		<a href="#" class="logo"><i class='bx bx-headphone' v-text="config.titulo1"></i></a>

		<ul class="navbar">
			<li><a href="#" class="active" v-text="config.enlace[0]"></a></li>
			<li><a href="#" v-text="config.enlace[1]"></a></li>
			<li><a href="#" v-text="config.enlace[2]"></a></li>
			<li><a href="#" v-text="config.enlace[3]"></a></li>
		</ul>

		<div class="header-icons">
			<i class='bx bx-cart'></i>
			<div class="bx bx-menu" id="menu-icon"></div>
		</div>

		
    </header>
        
    `,
	props:{
		config:Object
	}
}