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
        samples.sort(sort_by_key($(this).children()[0].innerText.toLowerCase()));
        refresh_content(samples);
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
                <span class="box-id">${sample.id}</span>
            </div>
            <div class="box-name-wrap">
                <span class="box-name">${sample.name}</span>
            </div>
        </div>
        `;

        $box.append(box_hdr, box_body);
        $box.click(sample.link, box_clicked);
        return $box;
    };

    function box_clicked(test){
        location.href = test.data;
    }

    function refresh_content(samples_arr){
        $('.boxes-wrapper').empty();
        samples_arr.map((sample)=>{
            $('.boxes-wrapper').append(create_sample(sample));
        });
    }

    refresh_content(samples);
});