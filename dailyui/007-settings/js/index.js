(function(){

    var $dropdowns = $(".dropdown");
    $dropdowns.on('click', function(event) {
        var input = $(this).find(".dropdown-input");
        input.prop('checked', !(input.prop('checked')));

        $(this).find('.dropdown-window').toggle(200);
    });

})();