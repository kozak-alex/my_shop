$(() => {
    const check_opt = $('input[name="option"]');
    check_opt.eq(0).prop('checked', true);
    $('#price').text('1999 грн');

    $('.foto_2').css('opacity', 0.4);
    $('.foto_3').css('opacity', 0.4);
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
        } else if (value === "2") {
            $('#price').text('2199 грн');
            $('#set_size_1').html('Простирадло 180&times;225.');
            $('#set_size_2').html('Півковдра 175&times;215');
        } else if (value === "3") {
            $('#price').text('2399 грн');
            $('#set_size_1').html('Простирадло 225&times;240.');
            $('#set_size_2').html('Півковдра 200&times;220');
        } else {
            $('#price').text('2999 грн');
            $('#set_size_1').html('Простирадло 225&times;240.');
            $('#set_size_2').html('Півковдра 2&times;155&times;215');
        }
    });

    $('.foto_1').on('click', () => {
        $('.foto_1').css('opacity', 1);
        $('.foto_2').css('opacity', 0.4);
        $('.foto_3').css('opacity', 0.4);
        $('#foto_big').attr('src', 'images/st033_01.jpg');
    });

    $('.foto_2').on('click', () => {
        $('.foto_1').css('opacity', 0.4);
        $('.foto_2').css('opacity', 1);
        $('.foto_3').css('opacity', 0.4);
        $('#foto_big').attr('src', 'images/st033_02.jpg');
    });

    $('.foto_3').on('click', () => {
        $('.foto_1').css('opacity', 0.4);
        $('.foto_2').css('opacity', 0.4);
        $('.foto_3').css('opacity', 1);
        $('#foto_big').attr('src', 'images/st033_03.jpg');
    });
    /*
        $("#type_1").on('click', () => {
            console.log('1 ' + $("#type_1").prop('checked'));
            if ($("#type_1").attr('checked') === true)
                $("#type_1").prop('checked', false);
            else
                $("#type_1").prop('checked', true);
            //            $("#type_2").prop('checked', false);
            //            $("#type_3").prop('checked', false);

            //       radio();
            console.log('2 ' + $("#type_1").prop('checked'));

        });
     */
    /*
        $("#type_2").on('click', () => {
            if ($("#type_2").prop('checked') === true)
                $("#type_2").prop('checked', false);
            else {
                $("#type_2").prop('checked', true);
                //           $("#type_1").prop('checked', false);
                //           $("#type_3").prop('checked', false);
            }
            radio();
        });

        $("#type_3").on('click', () => {
            if ($("#type_3").prop('checked') === true)
                $("#type_3").prop('checked', false);
            else {
                $("#type_3").prop('checked', true);
                //           $("#type_1").prop('checked', false);
                //           $("#type_2").prop('checked', false);
            }
            radio();
        });
    */
    function radio() {
        console.log('1 ' + $("#type_1").prop('checked'));
        console.log('2 ' + $("#type_2").prop('checked'));
        console.log('3 ' + $("#type_3").prop('checked'));
    }
    /*

        $('#subtip').on('click', () => {
           let sub=parseInt(percent,10);
           if(sub>5)
              sub--; 
           else 
              alert('Tip <5%');
           sub += '%';
           $('#inpperc').val(sub);
           percent=$('#inpperc').val();
           total(); 
        });
     
        $('#inpperc').on('keyup', e => {
           if(e.key==='Enter') {
              let ent=parseInt($('#inpperc').val(),10);
              if(ent<5) {
                 $('#inpperc').val(percent);
                 alert('Tip <5%');
              }
              else if(ent>30) {
                 $('#inpperc').val(percent);
                 alert('Tip >30%');
              }
              else {
                 ent += '%';
                 $('#inpperc').val(ent);
              }
              $('#inpperc').blur(); 
              percent=$('#inpperc').val(); 
              total(); 
           }      
        });
     
        $('#inpperc').on('focusout', () => {
           percent=$('#inpperc').val();
           let a=parseInt($('#inpperc').val(),10) + '%';
           $('#inpperc').val(a); 
           total(); 
        });


        $('#price').on('keyup', e => {
           if(e.key==='Enter') {
              pric=$('#price').val();
              $('#price').blur();
              total(); 
           }   
        });  
      
        $('#price').on('focusout', () => {
           pric=$('#price').val();
           total(); 
        }); 
    //-------------------------------------------------------
        $('#addpeop').on('click', () => {
           let add=Number(people);
           if(add<10) 
              add++; 
           else 
              alert('people >10');
           $('#inppeop').val(add);
           people=$('#inppeop').val();
           total(); 
        });
        
        $('#subpeop').on('click', () => {
           let sub=Number(people);
           if(sub>1)
              sub--; 
           else 
              alert('people <1');
           $('#inppeop').val(sub);
           people=$('#inppeop').val();
           total(); 
        });
        
        $('#inppeop').on('keyup', e => {
           if(e.key==='Enter') {
              const ent=Number($('#inppeop').val());
        
              if(ent<1) {
                 $('#inppeop').val(people);
                 alert('People <1');
              }
              else if(ent>10) {
                 $('#inppeop').val(people);
                 alert('People >10');
              }
              else {
                 $('#inppeop').val(ent);
              }
              $('#inppeop').blur();
              people = $('#inppeop').val(); 
              total(); 
           }
        });
     
        $('#inppeop').on('focusout', () => {
           people = $('#inppeop').val(); 
           total(); 
         });
    //-------------------------------------------------------
        function total() { 
     
           let total_tip;
     
           total_tip=parseInt(percent,10);
           total_tip=total_tip*pric;
           total_tip=total_tip/people;
           total_tip=Math.round(total_tip);
           total_tip=total_tip/100;
     
           let total_total=Math.round((pric*100 + pric*parseInt(percent,10))/people)/100;
        
           $('#moneytip').text('$'+total_tip);
           $('#moneytotal').text('$'+total_total);
        }

        */
});