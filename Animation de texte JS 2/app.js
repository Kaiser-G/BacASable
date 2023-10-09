const txtAnim = document.querySelector("h2");

new Typewriter(txtAnim, {
  deleteSpeed: 20,
  changeDelay: 80,
})

  .changeDelay(20)
  .typeString(
    "<span style='color: white'> Bonjour,<br> aujourd'hui nous allons<br> faire  une recette à la truffe :<br></span>"
  )
  .pauseFor(300)
  .typeString("<strong>Dev Full-Stack<strong> !")
  .pauseFor(1000)
  .deleteChars(13)
  .typeString("<span style='color: #27ae60'> CSS</span> !")
  .pauseFor(1000)
  .deleteChars(5)
  .typeString("<span style='color: midnightblue'> React</span> !")
  .pauseFor(1000)
  .deleteChars(7)
  .typeString("<span style='color: red'> HTML</span> !")
  .pauseFor(1000)
  .deleteChars(12)
  .typeString("<span style='color: white'> <br>Bon Appétit</span>")
  .start();
