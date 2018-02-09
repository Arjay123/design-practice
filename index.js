$(function(){

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
        refresh_content(samples, {key: key});
    });

    $('.boxes-wrapper').empty();
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
        layoutMode: 'fitRows',
        resizeable: false
    });

    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });



    function sort_by_key(key){
        return function(a, b){
            if (a[key] > b[key]) {
                return 1;
            }
            else if (a[key] < b[key]) {
                return -1;
            }
            return 0;
        }
    }


    function move_underline(element){

        var new_left = element.children().position().left;
        var new_width = element.width();

        $navline.stop().animate({
            left: new_left,
            width: new_width
        });
    }




    function create_sample(sample) {
        var $box = $("<div>", {"class": "box"});
        var box_hdr = `<div class="box-hdr">
            <img class="thumb" src="${sample.screenshot}">
        </div>`;

        var box_body = `
        <div class="box-body">
            <div class="box-id-wrap">
                <span class="box-id number">${sample.id}</span>
            </div>
            <div class="box-name-wrap">
                <span class="box-name name">${sample.name}</span>
            </div>
        </div>
        `;

        $box.append(box_hdr, box_body);
        $box.click(sample.link, box_clicked);
        return $box;
    };

    function box_clicked(url){
        location.href = url.data;
    }

    function refresh_content(samples_arr, {key='id', animate=true}){

        // if(animate){
        //     if(key==='name'){
        //         $('.boxes-wrapper').animate({left: '-100%'}, function(){
        //             $('.boxes-wrapper').css('left', '100%');
        //             sort_content(samples_arr, key);
        //             $('.boxes-wrapper').animate({left: '0%'},()=>{
        //                 $('.boxes-wrapper').css('left', '');
        //             });
        //         });
        //     }
        //     else {
        //         $('.boxes-wrapper').animate({right: '-100%'}, function(){
        //             $('.boxes-wrapper').css('right', '100%');
        //             sort_content(samples_arr, key);
        //             $('.boxes-wrapper').animate({right: '0%'}, ()=>{
        //                 $('.boxes-wrapper').css('right', '');
        //             });
        //         });
        //     }
        // }
        // else {
            sort_content(samples_arr, key);
        // }
    }


    function sort_content(samples_arr, key){
        $grid.isotope({sortBy: key});
    }

    refresh_content(samples, {animate: false});
});