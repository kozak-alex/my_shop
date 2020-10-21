$(() => {
    const check_opt = $('input[name="option"]');
    check_opt.eq(0).prop('checked', true);
    $('#price').text('1999');

    $('#foto_2').css('opacity', 0.4);
    $('#foto_3').css('opacity', 0.4);

    let set = 0;
    let typeBeddingSet = 1;

    /*
        let bedding_set1 = {
            name: "st033",
            price_onehalf: 1999,
            price_two: 2199,
            price_euro: 2399,
            price_family: 2999
        };
    */

    let set_st033 = {
        name: "ST033",
        color_set: 'Колір простирадла - ніжний персик.<br> Півковдри та наволочки - синій.',
        size_1_onehalf: '160&times;225',
        size_2_onehalf: '155&times;215',
        size_1_two: '180&times;225',
        size_2_two: '175&times;215',
        size_1_euro: '225&times;240',
        size_2_euro: '200&times;220',
        size_1_family: '225&times;240',
        size_2_family: '2&times;155&times;215',
        price_onehalf: 1999,
        price_two: 2199,
        price_euro: 2399,
        price_family: 2999,
        foto_01: 'images/st033_01.jpg',
        foto_02: 'images/st033_02.jpg',
        foto_03: 'images/st033_03.jpg'
    };

    let set_se016 = {
        name: "SE016",
        color_set: 'Колір олівковий',
        size_1_onehalf: '160&times;225',
        size_2_onehalf: '155&times;215',
        size_1_two: '180&times;225',
        size_2_two: '175&times;215',
        size_1_euro: '225&times;240',
        size_2_euro: '200&times;220',
        size_1_family: '225&times;240',
        size_2_family: '2&times;155&times;215',
        price_onehalf: 2499,
        price_two: 2799,
        price_euro: 2999,
        price_family: 3499,
        foto_01: 'images/se016_01.jpg',
        foto_02: 'images/se016_02.jpg',
        foto_03: 'images/se016_03.jpg'
    };

    let bedding_set = [
        set_st033,
        set_se016
    ];

    let price_st033 = {
        price_onehalf: 1999,
        price_two: 2199,
        price_euro: 2399,
        price_family: 2999
    };

    let price_se016 = {
        price_onehalf: 2499,
        price_two: 2799,
        price_euro: 2999,
        price_family: 3499
    };

    let price_set = [
        price_st033,
        price_se016
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
        const price_val = 'price_set[set].price_' + value;
        const size1 = 'size_1_' + value;
        const size2 = 'size_2_' + value;
        //   typeBeddingSet = Number(value);
        console.log(price_val);
        console.log({ price_val });
        console.log(size2);
        $('#price').text({ price_val });
        $('#set_size_1').html(bedding_set[set].size1);
        $('#set_size_2').html(bedding_set[set].size2);
        /*
                if (value === "1") {
                    $('#price').text(bedding_set[set].price_onehalf);
                    $('#set_size_1').html(bedding_set[set].size_1_onehalf);
                    $('#set_size_2').html(bedding_set[set].size_2_onehalf);
                } else if (value === "2") {
                    $('#price').text(bedding_set[set].price_two);
                    $('#set_size_1').html(bedding_set[set].size_1_two);
                    $('#set_size_2').html(bedding_set[set].size_2_two);
                } else if (value === "3") {
                    $('#price').text(bedding_set[set].price_euro);
                    $('#set_size_1').html(bedding_set[set].size_1_euro);
                    $('#set_size_2').html(bedding_set[set].size_2_euro);
                } else {
                    $('#price').text(bedding_set[set].price_family);
                    $('#set_size_1').html(bedding_set[set].size_1_family);
                    $('#set_size_2').html(bedding_set[set].size_2_family);
                }
                */
    });

    $('#foto_1').on('click', () => {
        $('#foto_1').css('opacity', 1);
        $('#foto_2').css('opacity', 0.4);
        $('#foto_3').css('opacity', 0.4);
        $('#foto_big').attr('src', bedding_set[set].foto_01);
    });

    $('#foto_2').on('click', () => {
        $('#foto_1').css('opacity', 0.4);
        $('#foto_2').css('opacity', 1);
        $('#foto_3').css('opacity', 0.4);
        $('#foto_big').attr('src', bedding_set[set].foto_02);
    });

    $('#foto_3').on('click', () => {
        $('#foto_1').css('opacity', 0.4);
        $('#foto_2').css('opacity', 0.4);
        $('#foto_3').css('opacity', 1);
        $('#foto_big').attr('src', bedding_set[set].foto_03);
    });
    //---------------------------------------------------------------------------------------
    $('.submenu .type_set').on('click', function() {
        set = $(this).index();
        //       console.log(set);
        new_set();
    });


    /*
        $('#ul_side .li_side').on('click', function() {
            //       alert($('.submenu > li').text());
            //       alert($('.li_side').index());
            console.log($(this).index());
        });
    */
    /* 
    $(".aside1-container p").on("click", function() {
        console.log($(this).text());
    });
*/
    /*
           $('#ul_side .li_side').click(function() {
               console.log($(this).index());
           });
    */
    //-------------------------------------------------------------

    function new_set() {
        $('#set_name').text(bedding_set[set].name);
        $('#color_bedding_set').html(bedding_set[set].color_set);
        $('#price').text(bedding_set[set].price_onehalf);
        $('#set_size_1').html(bedding_set[set].size_1_onehalf);
        $('#set_size_2').html(bedding_set[set].size_2_onehalf);

        $('#foto_big').attr('src', bedding_set[set].foto_01);
        $('#foto_1').attr('src', bedding_set[set].foto_01);
        $('#foto_2').attr('src', bedding_set[set].foto_02);
        $('#foto_3').attr('src', bedding_set[set].foto_03);
        $('#foto_1').css('opacity', 1);
        $('#foto_2').css('opacity', 0.4);
        $('#foto_3').css('opacity', 0.4);

    }
    /*
        function radio() {
            console.log('1 ' + $("#type_1").prop('checked'));
            console.log('2 ' + $("#type_2").prop('checked'));
            console.log('3 ' + $("#type_3").prop('checked'));
        }
        */
});