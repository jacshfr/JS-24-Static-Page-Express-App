'use strict';

$('button').on('click', function() {
  var input = $('input').val();
  $('h1').text(input);
});
