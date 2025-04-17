//DETECTA EVENTOS
document.addEventListener("DOMContentLoaded", function () {
  //GET UL QUE TIENE EL ICONO DEL LINKEDIN
  const linkLinkedin = document.getElementById("linkedin-link");
  //SE DECLARA VARIABLE DE URL DE MI PERFIL DE LINKEDIN
  const baseUrl =
    "https://www.linkedin.com/in/jos%C3%A9-espinoza-miranda-3265b91a0/";
  //DETECTA CLICK EN ELEMENTO Y LO REDIRECCIONA A MI PERFIL
  linkLinkedin.addEventListener("click", function () {
    window.location = baseUrl;
  });


});
