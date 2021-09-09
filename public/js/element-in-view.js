(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).on('scroll', function() {
  
  $(".fluid-section-one .content-column, .testimonial-section .authors-box .author-one, .testimonial-section .authors-box .author-two, .testimonial-section .authors-box .author-three, .testimonial-section .authors-box .author-four, .testimonial-section .authors-box .author-five, .testimonial-section .authors-box .author-six, .testimonial-section .authors-box .author-seven, .testimonial-section .authors-box .author-eight").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("now-in-view"); 
    } else {
      el.removeClass("now-in-view");
    }
  });
  
});

$(document).on('ready', function() {
  $(".fluid-section-one .content-column, .testimonial-section .authors-box .author-one, .testimonial-section .authors-box .author-two, .testimonial-section .authors-box .author-three, .testimonial-section .authors-box .author-four, .testimonial-section .authors-box .author-five, .testimonial-section .authors-box .author-six, .testimonial-section .authors-box .author-seven, .testimonial-section .authors-box .author-eight").each(function(i, el) {
	var el = $(el);
	if (el.visible(true)) {
	  el.addClass("now-in-view"); 
	} else {
	  el.removeClass("now-in-view");
	}
  });
});