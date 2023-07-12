// alert("Hola mundo"); Este es un mensaje de alerta
// Javascript es un lenguaje interpretado para páginas web, no es lo mismo qu JAVA
// JAVA es un lenguaje compilado

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Hi there!, this is my first project in javascript!')
  .pauseFor(300)
  .deleteChars(11)
  .typeString('<strong>JS</strong><span style="color: #8338ec;">, thank u <strong>Tecnolochicas💜</strong>! </span>')
  .pauseFor(1000)
  .start();