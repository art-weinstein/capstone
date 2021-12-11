var planetTraits = ["Rocky", "Icy", "Gas Giant", "Earth-Like"];
var planetAtmosphere = ["Nitrogen Rich", "Oxygen Rich", "Amonia", "Helium", "Carbon Dioxide"];
//planet temp?
function planetType(){
  let planet = planetTraits[Math.floor(Math.random() * planetTraits.length)];
  return planet;
}

function earthMasses(){
  var num = 100;
  var mass = Math.floor(Math.random() * (10 * num - 1 * num) + 1 * num) / (1*num);
  return mass;
}

function systemName() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function finalPlanet(){
  return finalMass;
}




$(document).ready(function() {
  $('.submit').click(function(event) {
    event.preventDefault();
      $(this).html(systemName());
      $('.planet0').text(planetType());
      $('.masses0').text(earthMasses());
      $('.planet1').text(planetType());
      $('.masses1').text(earthMasses());
      $('.planet2').text(planetType());
      $('.masses2').text(earthMasses());

  })
});

$(document).ready(function(){
  $('.planet').click(function(event){
    event.preventDefault();
      // $('#masses').text(earthMasses());
  })
});