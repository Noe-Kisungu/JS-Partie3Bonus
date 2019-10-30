var box = document.querySelector('div');
var customBox = function(){
  // box.style.width  '10px';
  var newWidth = box.offsetWidth;
  // box.style.width = newWidth + '10px';
  box.style.width = (newWidth + 10) + 'px';
  // box.setAttribute('width','+10px');
  box.style.backgroundColor = 'green';
}
// application des attributs au texte(enfant de la div) HTML
var customText = function(){
  box.style.color = 'white';
  box.style.fontWeight = 'bold';
  box.style.fontSize = '32px';
}
// box.onmouseover = customBox;
// box.onmouseover = customText;
box.addEventListener('mouseover',customBox);
box.addEventListener('mouseover',customText);

// Les lignes de code commentées ont été essayées mais ne fonctionnait pas.