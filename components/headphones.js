export default{
    name: "my-headphones",
    template: /*html*/`
    <div class="main">
		<div class="row" @click="add1" >
			<li><img :src="config.imagen1" ></li>
		</div>

		<div class="row row2" @click="add2">
			<li><img :src="config.imagen2"></li>
		</div>

		<div class="row row3">
			<li><img :src="config.imagen3" onclick="slider"></li>
		</div>

	</div>
    <a href="#" class="bottom">Scroll Down<i class='bx bx-down-arrow-circle' ></i></a>

	<script type="text/javascript">
		function slider(){
			document.querySelector('.one').src = config.producto3
		};

		let menu = document.querySelector('#menu-icon');
		let navbar = document.querySelector('.navbar');

		menu.onclick = () => {
			menu.classList.toggle('bx-x');
			navbar.classList.toggle('open');
		}
	</script>
    `,
    props:{
        config: Object
    },
}