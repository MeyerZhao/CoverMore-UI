(function ($, Drupal) {
  Drupal.behaviors.formFocus = {
    attach: function (context, settings) {
      var $focusitem = $('.quote-block--age', context).find('[data-ajax-focus]');
      if ($focusitem.length === 1) {
        $focusitem[0].focus();
      }
    },
  };
})(jQuery, Drupal)
