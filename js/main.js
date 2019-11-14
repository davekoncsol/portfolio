var circles = document.getElementById('index-content');
var left = document.getElementById('left');
var right = document.getElementById('right');
var sidescroller = document.getElementById('sidescroller');
var clear = document.getElementById('clear')
var skills = ['AWS', 'OAUTH', 'Mongoose', 'Heroku', 'SQL', 'jQuery', 'Python', 'PHP', 'APIs', 'MongoDB', 'Node.js', 'Express', 'Java', 'JavaScript', 'HTML5', 'Django', 'CSS3', 'PostgreSQL', 'React', 'Socket.io', 'AJAX', 'Bootstrap', 'JSON', 'MySQL'];


right.addEventListener('click', function () {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    sidescroller.scrollLeft += 60;
    scrollAmount += 10;
    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 20);
});
left.addEventListener('click', function () {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    sidescroller.scrollLeft -= 60;
    scrollAmount += 10;
    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 20);
});



circles.addEventListener('click', function (evt) {
  if (evt.path[0].toString().includes('Button')) {
    return
  }
  addCircle({
    skills: skills,
    x: evt.clientX,
    y: evt.clientY,
    dia: randomBetween(40, 120),
    rgba: getRandomRGBA()
  });
});



function clearCircle() {
  circles.innerHTML = `           <nav class="">

  <a class="dropdown-button" href="index.html">[DK]</a>
  <a href="about-me.html">About Me</a>
  <a class="dropdown-button" href="projects.html">Projects</a>
  <a href="https://www.linkedin.com/in/dave-koncsol/" target="_blank">
      <img src='./css/images/LI.png'></img>
  </a>
  <div class="dropdown">
      <a href="https://github.com/davekoncsol" target="_blank">
          <img class="dropdown-button" src='./css/images/GitHub_Logo.png'></img>
      </a>
      <!-- <div class="dropdown-content">
          <a href="https://github.com/davekoncsol/black-jack" target="_blank">BlackJack</a>
          <a href="https://github.com/davekoncsol/kickball" target="_blank">Kickball</a>
          <a href="https://github.com/davekoncsol/superheroes" target="_blank">SuperHeroes</a>
          <a href="https://github.com/davekoncsol/dating-app" target="_blank">Dating App</a>

      </div> -->
  </div>

</nav>

<h1>DAVE KONCSOL</h1>
<h1>FULL STACK DEVELOPER</h1>
<h3>Click anywhere here for a random skill of mine!</h3>
<button onclick="displayAllSkills(event)">Display all skills</button>
<button id='clear' onclick='clearCircle()'>Clear all skills</button>`;

}


function addAllCircles({
  x,
  y,
  dia,
  rgba,
  skills,

}) {
  var el = document.createElement('span');
  el.style.left = x - Math.floor(dia / 2 + 0.5) + 'px';
  el.style.top = y - Math.floor(dia / 2 + 0.5) + 'px';
  el.style.width = el.style.height = dia + 'px';
  el.style.backgroundColor = rgba;
  el.style.fontSize = Math.floor(dia / 5) + 'px';
  el.style.color = 'white';
  el.style.textAlign = 'center';
  el.style.lineHeight = dia + 'px';
  el.style.animationName = 'fadein';
  el.style.animationDuration = '2s';
  el.innerHTML = skills;

  circles.appendChild(el);
}




function addCircle({
  x,
  y,
  dia,
  rgba,
  skills
}) {
  var el = document.createElement('span');
  el.style.left = x - Math.floor(dia / 2 + 0.5) + 'px';
  el.style.top = y - Math.floor(dia / 2 + 0.5) + 'px';
  el.style.width = el.style.height = dia + 'px';
  el.style.backgroundColor = rgba;
  el.style.fontSize = Math.floor(dia / 5) + 'px';
  el.style.color = 'white';
  el.style.textAlign = 'center';
  el.style.lineHeight = dia + 'px';
  el.innerHTML = skills[randomBetween(0, skills.length - 1)];
  circles.appendChild(el);
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomRGBA() {
  return ['rgba(', randomBetween(0, 255), ',', randomBetween(0, 255), ',',
    randomBetween(0, 255), ',', randomBetween(2, 10) / 10, ')'
  ].join('');
}

function displayAllSkills(event) {
  console.log(event.clientX)
  console.log(event.clientY)
  console.log(window.innerHeight)
  console.log(window.innerWidth)
  clearCircle();
  skills.forEach(skill =>
    addAllCircles({
      skills: skill,
      x: randomBetween(0, window.innerWidth),
      y: randomBetween(10, 450),
      dia: randomBetween(40, 120),
      rgba: getRandomRGBA()
    }));

}