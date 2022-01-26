(function ($, Drupal) {
  Drupal.behaviors.CmapQuoteFixLabel = {
    attach: function (context, settings) {
      var $select = $('select', context);
      if ($select.length > 0) {
        for (var i = 0; i < $select.length; i++) {
          if ($('label[for="' + $select.eq(i).attr('id') + '"]').length === 0) {
            $select.eq(i).before('<label for="' + $select.eq(i).attr('id') + '" style="display:none">' + $select.eq(i).attr('name') + '</label>');
          }
        }
      }
    }
  };
})(jQuery, Drupal);
