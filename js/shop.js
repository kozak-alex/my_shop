$(() => {
    const check_opt = $('input[name="option"]');
    check_opt.eq(0).prop('checked', true);
    $('#price').text('1999 грн');

    $('#foto_2').css('opacity', 0.4);
    $('#foto_3').css('opacity', 0.4);

    let bedding_set = {
        name: "st033",
        price_onehalf: 1999,
        price_two: 2199,
        price_euro: 2399,
        price_family: 2999
    };


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
            $('#price').text('1999 грн');
            $('#set_size_1').html('Простирадло 160&times;225.');
            $('#set_size_2').html('Півковдра 155&times;215');
            alert(bedding_set.price_onehalf);
        } else if (value === "2") {
            $('#price').text('2199 грн');
            $('#set_size_1').html('Простирадло 180&times;225.');
            $('#set_size_2').html('Півковдра 175&times;215');
            alert(bedding_set.price_two);
        } else if (value === "3") {
            $('#price').text('2399 грн');
            $('#set_size_1').html('Простирадло 225&times;240.');
            $('#set_size_2').html('Півковдра 200&times;220');
            alert(bedding_set.price_euro);
        } else {
            $('#price').text('2999 грн');
            $('#set_size_1').html('Простирадло 225&times;240.');
            $('#set_size_2').html('Півковдра 2&times;155&times;215');
            alert(bedding_set.price_family);
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

    function radio() {
        console.log('1 ' + $("#type_1").prop('checked'));
        console.log('2 ' + $("#type_2").prop('checked'));
        console.log('3 ' + $("#type_3").prop('checked'));
    }
});