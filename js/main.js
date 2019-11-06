
var circles = document.getElementById('index-content');
var skills = ['AWS','jQuery', 'Python','PHP','APIs','MongoDB','Node.js','Express','Java','JavaScript','HTML','Django','CSS','PostgreSQL','React'];

  circles.addEventListener('click', function(evt) {
    // replace current line of code with this code
   addCircle( {
      skills: skills,
      x: evt.clientX,
      y: evt.clientY,
      dia: randomBetween(40,120),
      rgba: getRandomRGBA()
    });
  });



function clearCircle(){
  circles.innerHTML = '';
}





function addCircle({x, y, dia, rgba, skills}) {
  var el = document.createElement('span');
  el.style.left = x - Math.floor(dia / 2 + 0.5) + 'px';
  el.style.top = y - Math.floor(dia / 2 + 0.5)  + 'px';
  el.style.width = el.style.height = dia + 'px';
  el.style.backgroundColor = rgba;
  el.style.fontSize = Math.floor(dia / 5) + 'px';
  el.style.color = 'white';
  el.style.textAlign = 'center';
  el.style.lineHeight = dia + 'px';
  el.innerHTML = skills[randomBetween(0,14)];
  circles.appendChild(el);
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomRGBA() {
  return ['rgba(', randomBetween(0, 255), ',', randomBetween(0, 255), ',',
    randomBetween(0, 255), ',', randomBetween(2, 10) / 10, ')'].join('');
}
