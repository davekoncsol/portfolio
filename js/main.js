
// var circles = document.getElementById('index-content');
// var initials = 'lol';

//   circles.addEventListener('click', function(evt) {
//     // replace current line of code with this code
//    addCircle( {
//       initials: initials,
//       x: evt.clientX,
//       y: evt.clientY,
//       dia: randomBetween(10,100),
//       rgba: getRandomRGBA()
//     });
//   });



// function clearCircle(){
//   circles.innerHTML = '';
// }





// function addCircle({x, y, dia, rgba, initials}) {
//   var el = document.createElement('div');
//   el.style.left = x - Math.floor(dia / 2 + 0.5) + 'px';
//   el.style.top = y - Math.floor(dia / 2 + 0.5) + 480 + 'px';
//   el.style.width = el.style.height = dia + 'px';
//   el.style.backgroundColor = rgba;
//   el.style.fontSize = Math.floor(dia / 3) + 'px';
//   el.style.color = 'white';
//   el.style.textAlign = 'center';
//   el.style.lineHeight = dia + 'px';
//   el.innerHTML = initials;
//   circles.appendChild(el);
// }

// function randomBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function getRandomRGBA() {
//   return ['rgba(', randomBetween(0, 255), ',', randomBetween(0, 255), ',',
//     randomBetween(0, 255), ',', randomBetween(2, 10) / 10, ')'].join('');
// }
