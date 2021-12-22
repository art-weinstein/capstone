
var audio = document.getElementById('audio');
var play = document.getElementById('play');
var count = 0;
var i = 0;

function playPause() {
  if (count == 0) {
    count = 1
    audio.play();
  } else {
    count = 0;
    audio.pause();
  }
}

var planetTraits = ["Rocky", "Icy", "Gas Giant", "Earth-Like"];
var planetAtmosphere = ["Nitrogen Rich", "Oxygen Rich", "Amonia", "Helium", "Carbon Dioxide"];
//planet temp?
function planetType() {
  let planet = planetTraits[Math.floor(Math.random() * planetTraits.length)];
  return planet;
}

function planetAtm() {
  let planetAt = planetAtmosphere[Math.floor(Math.random() * planetAtmosphere.length)];
  return "Primary atmosphere composition: " + planetAt;
}

function earthMasses() {
  var num = 100;
  var mass = Math.floor(Math.random() * (10 * num - 1 * num) + 1 * num) / (1 * num);
  return "Earth Masses " + mass;
}

function life() {
  let life = false;
  var num = Math.random();
  if (num < 0.5) {
    life = false;
    return "Does not host life.";
  } else {
    return "Hosts life."
  }
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
  var btn = $(".play");
  btn.click(function () {
    btn.toggleClass("paused");
    return false;
  });
});


$(document).ready(function () {
  $('.continue').click(function (event) {
    event.preventDefault();
    $('.initial').hide();
    $('.next').fadeIn();
    $('.begin').fadeIn();

  })
  $('.begin').click(function (event) {
    event.preventDefault();
    $('.next').hide();
    $('.submit0').html(systemName());
    $('.submit1').html(systemName());
    $('.submit2').html(systemName());
    $('.display').fadeIn();
    $('.begin').hide();
  })
  $('.logDisplay').click(function (event) {
    event.preventDefault();
    if (i == 0) {
      $('.viewLog').html('No planets logged.')
    }
    $('.viewLog').fadeToggle();
  })
  $('.submit0, .submit1, .submit2').click(function (event) {
    event.preventDefault();
    var num = Math.random();
    if (num < 0.1) {
      $('.displayRogue').show();
      // $('.masses0' + '.masses1' + '.masses2').hide();
      // $('.atmosphere0', + '.atmosphere1', + '.atmosphere2').text(planetAtm()).hide();
      $('#gasPlanet0' + '#gasPlanet1' + '#gasPlanet2').hide();
      $('#rockPlanet0' + '#rockPlanet1' + '#rockPlanet2').hide();
      // $('.planet0').hide();
      $('.masses0').hide();
      $('.masses1').hide();
      $('.masses2').hide();
      $('.atmosphere0').hide();
      $('.atmosphere1').hide();
      $('.atmosphere2').hide();
      $('#icePlanet0', + '#icePlanet1', + '#icePlanet2').hide();
    } else {
      $('.displayRogue').hide();
      $('.submit0').html(systemName());
      $('.submit1').html(systemName());
      $('.submit2').html(systemName());
      $('.planet0').text(planetType()).show();
      $('.masses0').text(earthMasses()).hide();
      $('.life0').html(life()).hide();
      if ($('.life0').text() == 'Hosts life.') {

        $('.logAppend').append('<button id ="logCounter0" class=btn>Log Planet</button>');
      }
      $('#logCounter0').hide();
      // $('.logCounter0').hide();
      $('.atmosphere0').text(planetAtm()).hide();
      $('.planet1').text(planetType()).show();
      $('.masses1').text(earthMasses()).hide();
      $('.atmosphere1').text(planetAtm()).hide();
      $('.life1').html(life()).hide();
      $('.planet2').text(planetType()).show();;
      $('.atmosphere2').text(planetAtm()).hide();
      $('.masses2').text(earthMasses()).hide();
      $('.life2').html(life()).hide();
    }
  })
  $('.planet0').click(function (event) {
    event.preventDefault();
    if ($(this).text() == 'Gas Giant') {
      $('#gasPlanet0').fadeToggle();
    } else {
      $('#gasPlanet0').hide();
    }
    if ($(this).text() == 'Icy') {
      $('#icePlanet0').fadeToggle();
    } else {
      $('#icePlanet0').hide();
    }
    if ($(this).text() == 'Rocky') {
      $('#rockPlanet0').fadeToggle();
    } else {
      $('#rockPlanet0').hide();
    }
    if ($('.life0').text() == 'Hosts life.') {
      $('#logCounter0').fadeToggle();
    }
    $('.masses0').fadeToggle();
    $('.atmosphere0').fadeToggle();
    $('.life0').fadeToggle();
    // $('.logCounter0').fadeToggle();
  })
  $('.submit0, .submit1, .submit2').click(function (event) {
    event.preventDefault()
    $('#gasPlanet0').hide();
    $('#gasPlanet1').hide();
    $('#gasPlanet2').hide();
    $('#icePlanet0').hide();
    $('#icePlanet1').hide();
    $('#icePlanet2').hide();
    $('#rockPlanet0').hide();
    $('#rockPlanet1').hide();
    $('#rockPlanet2').hide();

  })
  $('.planet1').click(function (event) {
    event.preventDefault();
    if ($(this).text() == 'Gas Giant') {
      $('#gasPlanet1').fadeToggle();
    } else {
      $('#gasPlanet1').hide();
    }
    if ($(this).text() == 'Icy') {
      $('#icePlanet1').fadeToggle();
    } else {
      $('#icePlanet1').hide();
    }
    if ($(this).text() == 'Rocky') {
      $('#rockPlanet1').fadeToggle();
    } else {
      $('#rockPlanet1').hide();
    }
    $('.masses1').toggle();
    $('.atmosphere1').toggle();
    $('.life1').fadeToggle();
  })
  $('.planet2').click(function (event) {
    event.preventDefault();
    if ($(this).text() == 'Gas Giant') {
      $('#gasPlanet2').fadeToggle();
    } else {
      $('#gasPlanet2').hide();
    }
    if ($(this).text() == 'Icy') {
      $('#icePlanet2').fadeToggle();
    } else {
      $('#icePlanet2').hide();
    }
    if ($(this).text() == 'Rocky') {
      $('#rockPlanet2').fadeToggle();
    } else {
      $('#rockPlanet2').hide();
    }
    $('.masses2').toggle();
    $('.atmosphere2').toggle();
    $('.life2').fadeToggle();
  })
  $('.logAppend').on('click', '#logCounter0', function (event) {
    event.preventDefault();
    i++
    $('.viewLog').html('Planets logged ' + i);
    $('#logCounter0').remove();
  })
});



