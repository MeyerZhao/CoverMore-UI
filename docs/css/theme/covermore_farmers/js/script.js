(function ($, Drupal) {

  // Object-fit-images polyfill.
  objectFitImages();

  // If there is only desktop slideshow image, then don't hide for mobile.
  if ($('.block-cmapslickbackgroundslideshow .show-for-small-only').length == 0) {
    $('.block-cmapslickbackgroundslideshow .hide-for-small-only').toggleClass('hide-for-small-only');
  }

  var colors = [];
  try {
    colors = drupalSettings.cmap_branded_context.colors;
  } catch (e) {
    console.log(e.toString());
  }
  if (colors) {
    cssVars({
      variables: {
        '--primary-color': colors.primaryColor,
        '--secondary-color': colors.secondaryColor,
      }
    });
  }

  // iframe Quote Widget
  $('.iframe-wrapper #edit-destinations--2-selectized').focus('click', function () {
    iframeOpenPanel();
  });

  $('.iframe-wrapper #edit-destinations--2-selectized').blur(function () {
    iframeClosePanel();
  });

  $('.iframe-wrapper').on('show.daterangepicker', function (ev, picker) {
    iframeOpenPanel();
  });

  $('.iframe-wrapper').on('hide.daterangepicker', function (ev, picker) {
    iframeClosePanel();
  });

  function iframeOpenPanel() {
    $('body').css('min-height','520px');
    $('.off-canvas-wrapper').css('min-height','520px');
    $('.off-canvas-wrapper').css('overflow','visible');
  }

  function iframeClosePanel() {
    $('body').css('min-height', 'auto');
    $('.off-canvas-wrapper').css('min-height', 'auto');
    $('.off-canvas-wrapper').css('overflow','hidden');
  }

  $(document).ready(function() {
    $('.extra-holidays.benefits').each(function(){
      var highestBox = 0;
      // Select and loop the elements we want to equalise
      $('.benefit', this).each(function(){
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height();
        }
      });
      // Set the height of all those children to whichever was highest
      $('.benefit div',this).height(highestBox);
    });
  });

})(jQuery, Drupal);
