// Add smooth scrolling to all links
$('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
  
  // Validate form on submit
  $('form').on('submit', function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    if (name == '' || email == '') {
      alert('Please fill out all fields.');
    } else {
      alert('Thank you for joining us!');
    }
  });
  