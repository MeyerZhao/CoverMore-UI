(function ($, Drupal) {
  Drupal.behaviors.CmapQuoteAddOn = {
    attach: function (context, settings) {
      this.addonsPrice();
    },
    addonsPrice: function () {
      $(".add-on-item div.AddonSelectedPrice").html("");
      if($('#quote-summary tr.c-trip-info__addons').length > 0) {
        var wrapperText = $('.AddonSelectedText').text();

        $('#quote-summary tr.c-trip-info__addons').each(function() {
          var addonId = $(this).attr('id');
          if ($("." + addonId).length > 0) {
            var addonPrice = $("#quote-summary #" + addonId + " .trip-info--price--value").text();
            $("." + addonId + " div.AddonSelectedPrice").html("(" + wrapperText + " " + addonPrice + ")");
          }
        })
      }
    }
  }
})(jQuery, Drupal)
