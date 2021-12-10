var planetTraits = ["Rocky", "Icy", "Gas Giant", "Earth Like"]

function systemName() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


$(document).ready(function() {
  $('.submit').click(function(event) {
    event.preventDefault();
      $(this).html(systemName())
  })
});