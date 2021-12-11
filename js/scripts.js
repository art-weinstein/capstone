var planetTraits = ["Rocky", "Icy", "Gas Giant", "Earth-Like"];
var planetAtmosphere = ["Nitrogen Rich", "Oxygen Rich", "Amonia", "Helium", "Carbon Dioxide"];
//planet temp?
function planetType() {
  let planet = planetTraits[Math.floor(Math.random() * planetTraits.length)];
  return planet;
}

function planetAtm(){
  let planetAt = planetAtmosphere[Math.floor(Math.random() * planetAtmosphere.length)];
  return "Primary atmosphere composition: " + planetAt;
}

function earthMasses() {
  var num = 100;
  var mass = Math.floor(Math.random() * (10 * num - 1 * num) + 1 * num) / (1 * num);
  return "Earth Masses " + mass;
}

function systemName() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function finalPlanet() {
  return finalMass;
}




$(document).ready(function () {
  $('.submit').click(function (event) {
    event.preventDefault();
    $(this).html(systemName());
    $('.planet0').text(planetType()).show();
    $('.masses0').text(earthMasses()).hide();
    $('.atmosphere0').text(planetAtm()).hide();
    $('.planet1').text(planetType()).show();
    $('.masses1').text(earthMasses()).hide();
    $('.atmosphere1').text(planetAtm()).hide();
    $('.planet2').text(planetType()).show();;
    $('.atmosphere2').text(planetAtm()).hide();
    $('.masses2').text(earthMasses()).hide();
  })
  $('.planet0').click(function (event) {
    event.preventDefault();
    $('.masses0').toggle();
    $('.atmosphere0').toggle();
  })
  $('.planet1').click(function (event) {
    event.preventDefault();
    $('.masses1').toggle();
    $('.atmosphere1').toggle();
  })
  $('.planet2').click(function (event) {
    event.preventDefault();
    $('.masses2').toggle();
    $('.atmosphere2').toggle();
  })
});

// $(document).ready(function(){
//   $('.planet').click(function(event){
//     event.preventDefault();
//       // $('#masses').text(earthMasses());
//   })
// });