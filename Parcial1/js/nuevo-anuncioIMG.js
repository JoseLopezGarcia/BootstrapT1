window.onload = init;

function init(){
	//$('.toast').hide()	;
}

function agregarIMG(){

	document.querySelector('#file-chooser').click();
	$('#file-chooser').change(function(){Mostrar(this)});
    
}

function Mostrar(imag){
	let carrusel = document.querySelector('#carusel-body');
	
	console.log('Holaaaaaaaa');
	if (imag.files && imag.files[0]) {
		
		
		let reader = new FileReader();
		reader.onload = function(e){
			carrusel.innerHTML += "<div class='carousel-item h-100'><img src='"+e.target.result+"' class='w-100 h-100'> </div>"
			
			mostrarA();
		}
		reader.readAsDataURL(imag.files[0]);
	}
}

function mostrarA(){
	console.log('Toast');
		$('.toast').show()	;
		
	}


  function alerta(){
    Swal.fire(
      'Hecho!',
      '',
      'success'
    );

    document.querySelector('#cerrarModal').click();
  }