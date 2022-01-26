(function($, Drupal) {
  Drupal.behaviors.CmapQuoteWcag = {
    attach(context, settings) {
      const destinationTag = ".selectize-dropdown.single.destination-selector";
      // destination dropdown and input attributes updates
      $(destinationTag).attr("role", "listbox");
      $("input#edit-destinations--2-selectized").attr("role", "combobox");
      $(destinationTag).attr("id", "destination-aria");
      $(".destination-selector.selectize-control").on("keyup", function (event) {
        // bind keyup and keydown
        var value = $.trim($(this).val());
        if (!value.length) {
          if (event.which == 38 || event.which == 40) {
            var activeOption = $(`${destinationTag} .active`).data("value");
            $(`${destinationTag} .option`).attr("aria-selected", "false");
            $(`${destinationTag} .active`).attr("aria-selected", "true");
            $("input#edit-destinations--2-selectized").attr("aria-activedescendant", activeOption);
          }
        }
      });

      // Residence Selectize
      if ($(".cmap-quote--resident-selectize", context)[0]) {
        let residence = $(".cmap-quote--resident-selectize", context)[0].selectize;
        const residenceTag = ".selectize-dropdown.single.cmap-quote--resident-selectize";
        residence.refreshOptions(false);
        $(`${residenceTag} .option`).each(function(i, obj) {
          $(this).attr("role", "option");
          $(this).attr("aria-selected", "false");
          $(this).attr("data-selected", "false");
          $(this).attr("tabindex", "-1");
          $(this).attr("id", $(this).data("value"));
        });
        // Residence dropdown and input attributes updates
        $(residenceTag).attr("role", "listbox");
        $("input#edit-state-selectized").attr("role", "combobox");
        $(residenceTag).attr("id", "residence-aria");
        $(".node--type-travel-insurance-landing-page").attr("tabindex", "-1");
        $(".cmap-quote--resident-selectize.selectize-control").on("keyup", function (event) {
          // bind keyup and keydown.
          var value = $.trim($(this).val());
          if (!value.length) {
            if (event.which == 38 || event.which == 40) {
              var activeOption = $(`${residenceTag} .active`).data("value");
              $(`${residenceTag} .option`).attr("aria-selected", "false");
              $(`${residenceTag} .active`).attr("aria-selected", "true");
              $("input#edit-state-selectized").attr("aria-activedescendant", activeOption);
            }
          }
        });
        residence.on('change', function(value){
          $('.cmap-quote--resident-selectize .items .item').attr("tabindex", "-1");
        });
      }

      // Disable focus out and keyup event for price field.
      $('input[name^="age[trip_cost_"]').off('keyup focusout');

      // Moving tab index to age field after state residence.
      $(document).on("keyup", function (event) {
        if (event.which == 9  && event.target['attributes']['class'] != undefined && event.target['attributes']['class']['value'].indexOf('node--type-travel-insurance-landing-page') != -1) {
          $('#edit-age-age-0').focus();
        }
      });
      // Removing focus from hero image.
      $('.block-covermore-farmers-cmapslickbackgroundslideshow .field-item.slick-slide').attr("tabindex", "-1");
      $('#edit-destinations--2-selectized').focus();
    }
  };
})(jQuery, Drupal);
