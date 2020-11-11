$(() => {
    const check_opt = $('input[name="option"]');
    check_opt.eq(0).prop('checked', true);
    $('#price').text('1999');

    $('#foto_2').css('opacity', 0.4);
    $('#foto_3').css('opacity', 0.4);

    let set = 0;
    //   let typeBeddingSet = 0;
    let typeBeddingSet = 'price_onehalf';

    /*
        let bedding_set1 = {
            name: "st033",
            price_onehalf: 1999,
            price_two: 2199,
            price_euro: 2399,
            price_family: 2999
        };
    */

    /*   
   let set_st033 = {
    name: "ST033",
    color_set: 'Колір простирадла - ніжний персик.<br> Півковдри та наволочки - синій.',
    size_1: ['160&times;225', '180&times;225', '225&times;240', '225&times;240'],
    size_2: ['155&times;215', '175&times;215', '200&times;220', '2&times;155&times;215'],
    price_set: [1999, 2199, 2399, 2999],
    foto_01: 'images/st033_01.jpg',
    foto_02: 'images/st033_02.jpg',
    foto_03: 'images/st033_03.jpg'
};
*/

    let set_st033 = {
        name: "ST033",
        color_set: 'Колір простирадла - ніжний персик.<br> Півковдри та наволочки - синій.',
        size_1: {
            'price_onehalf': '160&times;225',
            'price_two': '180&times;225',
            'price_euro': '225&times;240',
            'price_family': '225&times;240'
        },
        size_2: {
            'price_onehalf': '155&times;215',
            'price_two': '175&times;215',
            'price_euro': '200&times;220',
            'price_family': '2&times;155&times;215'
        },
        price_set: {
            'price_onehalf': 1999,
            'price_two': 2199,
            'price_euro': 2399,
            'price_family': 2999
        },
        foto_01: 'images/st033_01.jpg',
        foto_02: 'images/st033_02.jpg',
        foto_03: 'images/st033_03.jpg'
    };

    let set_se016 = {
        name: "SE016",
        color_set: 'Колір олівковий',
        size_1: {
            'price_onehalf': '160&times;225',
            'price_two': '180&times;225',
            'price_euro': '225&times;240',
            'price_family': '225&times;240'
        },
        size_2: {
            'price_onehalf': '155&times;215',
            'price_two': '175&times;215',
            'price_euro': '200&times;220',
            'price_family': '2&times;155&times;215'
        },
        price_set: {
            'price_onehalf': 2499,
            'price_two': 2799,
            'price_euro': 2999,
            'price_family': 3499
        },
        foto_01: 'images/se016_01.jpg',
        foto_02: 'images/se016_02.jpg',
        foto_03: 'images/se016_03.jpg'
    };

    let set_pf066 = {
        name: "PF066",
        color_set: 'Колір простирадла та наволочки - світло-сірий.<br>Півковдри - світло-сірий, сірий зигзаг',
        size_1: {
            'price_onehalf': '160&times;225',
            'price_two': '180&times;225',
            'price_euro': '225&times;240',
            'price_family': '225&times;240'
        },
        size_2: {
            'price_onehalf': '155&times;215',
            'price_two': '175&times;215',
            'price_euro': '200&times;220',
            'price_family': '2&times;155&times;215'
        },
        price_set: {
            'price_onehalf': 1599,
            'price_two': 1775,
            'price_euro': 1850,
            'price_family': 2150
        },
        foto_01: 'images/pf066_01.jpg',
        foto_02: 'images/pf066_02.jpg',
        foto_03: null
    };
    let bedding_set = [
        set_st033,
        set_se016,
        set_pf066
    ];


    //    alert(product[1].name);


    $('#set_name').text(bedding_set[set].name);

    /*************************************************************************************/

    $('#foto_1').on('click', () => {
        $('#foto_1').css('opacity', 1);
        $('#foto_2').css('opacity', 0.4);
        $('#foto_3').css('opacity', 0.4);
        $('#foto_big').attr('src', bedding_set[set].foto_01);
    });
    /*
        $(check_opt).on('change', () => {
            const value = $('input[name="option"]:checked').val();
            const typeBeddingSet = Number(value) - 1;
            $('#price').text(bedding_set[set].price_set[typeBeddingSet]);
            $('#set_size_1').html(bedding_set[set].size_1[typeBeddingSet]);
            $('#set_size_2').html(bedding_set[set].size_2[typeBeddingSet]);
        });
    */
    $(check_opt).on('change', () => {
        const value = $('input[name="option"]:checked').val();
        const typeBeddingSet = 'price_' + value;
        $('#price').text(bedding_set[set].price_set[typeBeddingSet]);
        $('#set_size_1').html(bedding_set[set].size_1[typeBeddingSet]);
        $('#set_size_2').html(bedding_set[set].size_2[typeBeddingSet]);
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
        typeBeddingSet = 0;
        check_opt.eq(0).prop('checked', true);
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

        $('#price').text(bedding_set[set].price_set[typeBeddingSet]);
        $('#set_size_1').html(bedding_set[set].size_1[typeBeddingSet]);
        $('#set_size_2').html(bedding_set[set].size_2[typeBeddingSet]);

        $('#foto_big').attr('src', bedding_set[set].foto_01);
        $('#foto_1').attr('src', bedding_set[set].foto_01);
        $('#foto_2').attr('src', bedding_set[set].foto_02);
        if (bedding_set[set].foto_03 === null)
            $('#foto_3').css('display', 'none');
        else {
            $('#foto_3').attr('src', bedding_set[set].foto_03);
            $('#foto_3').css('display', 'block');
        }
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