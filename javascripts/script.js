function loadMainContent(file) {
  $.ajax({
    url:     file,
    context: $('main'),
    success: function(data) {
      $('main').empty();
      $('main').append(data).hide().fadeIn(2000);
    }
  })
}

function toggleNav() {
  $('nav a').click(function(e) {
    $('nav').find('.current').removeClass('current');
    $(e.target).addClass('current');
  });
}

$(document).ready(function() {
  toggleNav();
  loadMainContent('about.html');

  $('#people').click(function() { loadMainContent('people.html') });
  $('#about').click(function() { loadMainContent('about.html') });
});
