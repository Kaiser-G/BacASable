const txtAnim = document.querySelector("h2");

new Typewriter(txtAnim, {
  deleteSpeed: 20,
  changeDelay: 80,
})

  .changeDelay(20)
  .typeString(
    "<span style='color: white'> Bonjour,<br> aujourd'hui nous allons faire une recette<br> de pommes de terre gratinées au four.<br></span>"
  )
  .pauseFor(300)
  .typeString("<span style='color: white'> Ingrédients :</span>")
  .pauseFor(2000)
  .typeString("<span style='color: white'> 4 grosses pommes de terre</span>")
  .pauseFor(2000)
  .deleteChars(26)
  .typeString("<span style='color: white'> 100 g de beurre</span>")
  .pauseFor(2000)
  .deleteChars(16)
  .typeString("<span style='color: white'> Sel et poivre</span>")
  .pauseFor(2000)
  .deleteChars(28)
  .typeString("<span style='color: white'> <br>Bon Appétit</span>")
  .start();
