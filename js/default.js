// Abre o menu mobile
$(".button-collapse").sideNav();

// Efeito Âncora
$('#menu-navegacao').find('a').click(function(){
	if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && 
		location.hostname == this.hostname){
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if(target.length){
			$('html, body').animate({
				scrollTop: target.offset().top - 64
			}, 1000);
			return false;
		} 
	}
});

// Mostrar ano atual
let data = new Date();
document.getElementById('data-ano').innerHTML = data.getFullYear();
