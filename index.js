(function(){

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
})();