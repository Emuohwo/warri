  
  $(document).ready(function() {
      
  /*--------------------------
  preloader
  ---------------------------- */
  $(window).on('load', function() {
    var pre_loader = $('#preloader');
    pre_loader.fadeOut('slow', function() {
      $(this).remove();
    });
  });

    /*============= wow =============== */
    new WOW().init();

    
  });