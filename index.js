var myTitle = 'rotaluclaC thgieW ortsA'
document.getElementById('myTitle').innerHTML = reverse(myTitle);

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}



var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];


var worlds = document.getElementById('planet');
for(var i = 0; i < planets.length; i++) {
    var opt = document.createElement('option');
    var planetnames = planets[i].planet;
    opt.innerHTML = planetnames;
    opt.value = planets[i];
    worlds.appendChild(opt);
}



function calculateWeight(){
var aWeight = document.getElementById('weight').value;
var aPlanet = document.getElementById('planet').selectedIndex;
var aGravity = planets[aPlanet].gravity;
var planetName = planets[aPlanet].planet;
var final = aWeight * aGravity;
document.getElementById("result").innerHTML = final;
document.getElementById("result").innerHTML = "If you are on the " + planetName + ", you would weigh " + final + "!";


}


