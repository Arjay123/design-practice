$(function(){

    var URLBASE = 'https://arjay123.github.io/design-practice';

    // init ul sort functionality
    $("#sort-group").append("<li id='nav-underline'></li>");

    $navline = $('#nav-underline');
    $navline
        .width($('.current-nav .sort-item-link').width())
        .css('left', $('.current-nav .sort-item-link').position().left)
        .data("prevLeft", $navline.position.left)
        .data("prevWidth", $navline.width());

    $(".sort-item").click(function(){
        move_underline($(this));
        var key = $(this).children()[0].innerText.toLowerCase();
        sort_content(samples, key);
    });

    // init modal close
    $('#close-btn').add('.modal-wrap').click(function(){
        $('#view').attr('src', '');
        $('.modal-wrap').toggle();
    });

    // init sample grid w/ isotope
    samples.map((sample)=>{
        $('.boxes-wrapper').append(create_sample(sample));
    });

    var $grid = $('.boxes-wrapper').isotope({
        itemSelector: '.box',
        getSortData: {
            name: '.name',
            id: '.number parseInt'
        },
        sortBy: 'number',
        layoutMode: 'masonry',
        masonry: {
            gutter: '.gutter-sizer',
            columnWidth: '.grid-sizer'
        },
        percentPosition: true
    });

    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });


    /* animates underline underneath nav element when clicked */
    function move_underline(element){

        var new_left = element.children().position().left;
        var new_width = element.width();

        $navline.stop().animate({
            left: new_left,
            width: new_width
        });
    }


    /* creates a box component from sample object */
    function create_sample(sample) {
        var $box = $("<div>", {"class": "box"});
        var box_hdr = `<div class="box-hdr">
            <img class="thumb" src="./screenshots/${sample.screenshot}">
        </div>`;

        var box_id = `<div class="box-id-wrap">
        <span class="box-id number">${sample.id}</span>
        </div>
        `

        var box_body = `
        <div class="box-body">
            <div class="box-name-wrap">
                <span class="number">${sample.id}.</span>
                <span class="box-name name">${sample.name}</span>
            </div>
        </div>
        `;

        $box.append(box_hdr, box_body);
        $box.click(sample.link, box_clicked);
        return $box;
    };


    /* opens modal window when clicked */
    function box_clicked(url){
        $('#view').attr('src', URLBASE + url.data);
        $('.modal-wrap').toggle();
    }


    /* sorts samples by key using isotope */
    function sort_content(samples_arr, key){
        $grid.isotope({sortBy: key});
    }
});