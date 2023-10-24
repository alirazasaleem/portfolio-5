$(document).ready(function() {
  var current_first = 0;
  var current_order = 0;
  $('.left-arrow').click(function(event) {
    --current_order;
    if (current_order<0) {
      current_order = 0;
    }
    $('.gal-img').eq(current_first).css('order', current_order);
    --current_first;
  });
  $('.right-arrow').click(function(event) {
    ++current_order;
    if (current_order<0) {
      current_order = 0;
    }
    $('.gal-img').eq(current_first).css('order', current_order);
    ++current_first;
  });

  $('.gal-img').click(function(event) {
    var img_src = $(this).children('img').attr('src');
    $('#pre-sec img').attr('src', img_src);
    $('#pre-sec').addClass('active');
  });
});

// Input Lock
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});
