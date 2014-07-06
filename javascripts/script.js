function loadMainContent(fileName) {
  $.ajax({
    url:     'people.html',
    context: $('main'),
    success: function(data) {
      $('main').html(data)
    }
  })
}



$(document).ready(function() {

});
