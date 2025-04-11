document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("id-cambiar-texto");
  const mensaje = document.getElementById("id-mensaje");

  boton.addEventListener("click", function () {
    mensaje.textContent = "SE CAMBIO 👍";
    document.body.style.backgroundColor = "aquamarine";
    console.assert('ALERT')
    const respuesta = prompt("Como te llamas?");
    if (respuesta) {
      alert("Hola " + respuesta + ", bienvenido.");
    }
    for (let index = 1; index < 10; index++) {
        console.log(index*5);
        
        
    }
  });
});
