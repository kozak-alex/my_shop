$(() => {
    const check_opt = $('input[name="option"]');
    check_opt.eq(0).prop('checked', true);
    $('#price').text('1999 грн');

    $('#foto_2').css('opacity', 0.4);
    $('#foto_3').css('opacity', 0.4);

    let set = 1;


    let bedding_set1 = {
        name: "st033",
        price_onehalf: 1999,
        price_two: 2199,
        price_euro: 2399,
        price_family: 2999
    };


    let set_st033 = {
        name: "ST033",
        size_1_onehalf: '160&times;225',
        size_2_onehalf: '155&times;215',
        size_1_two: '180&times;225',
        size_2_two: '175&times;215',
        size_1_euro: '225&times;240',
        size_2_euro: '200&times;220',
        size_1_family: '225&times;240',
        size_2_family: '2&times;155&times;215',
        price_onehalf: 1999,
        price_two: 2191,
        price_euro: 2391,
        price_family: 2991
    };

    let set_st034 = {
        name: "ST034",
        size_1_onehalf: '160&times;225',
        size_2_onehalf: '155&times;215',
        size_1_two: '180&times;225',
        size_2_two: '175&times;215',
        size_1_euro: '225&times;240',
        size_2_euro: '200&times;220',
        size_1_family: '225&times;240',
        size_2_family: '2&times;155&times;215',
        price_onehalf: 1991,
        price_two: 2191,
        price_euro: 2391,
        price_family: 2991
    };

    let bedding_set = [
        set_st033,
        set_st034
    ];

    //    alert(product[1].name);


    $('#set_name').text(bedding_set[set].name);
    /**
     * 
     * 
                array.push({
                    date: element.applicable_date,
                    temperature: element.the_temp,
                    maxTemperature: element.max_temp,
                    minTemperature: element.min_temp,
                    picture: `https://www.metaweather.com/static/img/weather/png/64/${element.weather_state_abbr}.png`
                })

     */



    //   let percent = $('#inpperc').val();
    //   let pric = $('#price').val();
    //   let people = $('#inppeop').val();
    /********************************************/
    $(check_opt).on('change', () => {
        const value = $('input[name="option"]:checked').val();

        if (value === "1") {
            $('#price').text(bedding_set[set].price_onehalf);
            $('#set_size_1').html(bedding_set[set].size_1_onehalf);
            $('#set_size_2').html(bedding_set[set].size_2_onehalf);
            //           alert(bedding_set.price_onehalf);
        } else if (value === "2") {
            $('#price').text(bedding_set[set].price_two);
            $('#set_size_1').html(bedding_set[set].size_1_two);
            $('#set_size_2').html(bedding_set[set].size_2_two);
            //           alert(bedding_set.price_two);
        } else if (value === "3") {
            $('#price').text(bedding_set[set].price_euro);
            $('#set_size_1').html(bedding_set[set].size_1_euro);
            $('#set_size_2').html(bedding_set[set].size_2_euro);
            //           alert(bedding_set.price_euro);
        } else {
            $('#price').text(bedding_set[set].price_family);
            $('#set_size_1').html(bedding_set[set].size_1_family);
            $('#set_size_2').html(bedding_set[set].size_2_family);
            //           alert(bedding_set.price_family);
        }
    });

    $('#foto_1').on('click', () => {
        $('#foto_1').css('opacity', 1);
        $('#foto_2').css('opacity', 0.4);
        $('#foto_3').css('opacity', 0.4);
        $('#foto_big').attr('src', 'images/st033_01.jpg');
    });

    $('#foto_2').on('click', () => {
        $('#foto_1').css('opacity', 0.4);
        $('#foto_2').css('opacity', 1);
        $('#foto_3').css('opacity', 0.4);
        $('#foto_big').attr('src', 'images/st033_02.jpg');
    });

    $('#foto_3').on('click', () => {
        $('#foto_1').css('opacity', 0.4);
        $('#foto_2').css('opacity', 0.4);
        $('#foto_3').css('opacity', 1);
        $('#foto_big').attr('src', 'images/st033_03.jpg');
    });

    $('.submenu > li').on('click', () => {
        //       alert($('.submenu > li').text());
        alert($('.submenu > li').index());
    });

    function radio() {
        console.log('1 ' + $("#type_1").prop('checked'));
        console.log('2 ' + $("#type_2").prop('checked'));
        console.log('3 ' + $("#type_3").prop('checked'));
    }
});