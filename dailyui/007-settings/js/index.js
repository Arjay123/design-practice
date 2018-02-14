(function(){

    var $dropdowns = $(".dropdown");
    $dropdowns.on('click', function(event) {
        var input = $(this).find(".dropdown-input");
        input.prop('checked', !(input.prop('checked')));
        if (input.prop('checked')) {
            $(this).find('.dropdown-window').show(200);
        }
        else {
            $(this).find('.dropdown-window').hide(200);
        }

    });

})();