import {fecha} from './fech';
import {reserv} from './reservaciones';
import  './styles.scss';
import  $ from 'jquery';

var res :  reserv.Reservacion;
var fech,fech2: fecha.Fecha;
res = new reserv.Reservacion;
$(document).ready(function(e) {
// suma
  $('#reservar').on('click',function(){
  agregar_reservacion();
  });
  $('#tablecontent').on('click','.cons_ind',function(){

    //  alert(res[parseInt($(this).attr('id'))]);
    var i = parseInt($(this).attr('id'));
    var la_fech1,la_fech2,d_c : fecha.Fecha;
    la_fech1 = res[i][4];
    la_fech2 = res[i][5];
      var cant_dias =   fecha.Fecha.calc_date(la_fech1,la_fech2);

      $("#table_uno tbody >  tr").remove();
    $('#contenido_solo').append('<tr><td>' + res[i][0] + '</td> <td>' + res[i][1] + '</td><td>' +la_fech1.getdate()+ '</td> <td>' + la_fech2.getdate() + '</td>'+
   '<td>' + cant_dias+ ' </td><td>'+ parseInt(cant_dias)*1000 +' </td><td>'+  parseInt(cant_dias)*1500+' </td></tr>');

    $('.blackbackground').css('display',"block");


  });

  $('.blackbackground').on('click',function(){
        $(this).css('display','none');
  });
  // $('#lista').on('click',function(){
  //   alert('lista');
  // });
  $('#tablecontent').on('click','.eliminar',function(){
      //  console.log('works');
  res = reserv.Reservacion.eliminar_index(res,parseInt($(this).attr('id')));
       // res.splice(parseInt($(this).attr('id')),1);
       imprimir();
  });
  $('.cons_ind').on('click',function(){
    alert('consultar 2');
  });
  $('#calcular').on('click',function(){
    // split fecha por /
    var str = $('#datepicker1').val();
    var f_entrada = str.split("/");
    str =  $('#datepicker2').val();
    var f_salida = str.split("/");
    fech = new fecha.Fecha( f_entrada[2] , f_entrada[0],  f_entrada[1]);
    fech2 = new fecha.Fecha( f_salida[2] , f_salida[0],  f_salida[1]);
    $("#dias").val(fecha.Fecha.calc_date(fech,fech2));
    $("#costo_cuarto").val(reserv.Reservacion.calcular_precio($('.spinner1 input').val(),$('.spinner2 input').val(),+fecha.Fecha.calc_date(fech,fech2)));

  });

        function agregar_reservacion(){
          var array = new Array();
            var num = $('#reserv').val();
            var nombre = $('#nombre_per').val();
            // split fecha por /
            var str = $('#datepicker1').val();
            var f_entrada = str.split("/");
            str =  $('#datepicker2').val();
            var f_salida = str.split("/");
            fech = new fecha.Fecha( f_entrada[2] , f_entrada[0],  f_entrada[1]);
            fech2 = new fecha.Fecha( f_salida[2] , f_salida[0],  f_salida[1]);
            //lleno(fech,$('.spinner1 input').val(),$('.spinner2 input').val());
            var cant_dias =   fecha.Fecha.calc_date(fech,fech2);

            var costo_total =reserv.Reservacion.calcular_precio($('.spinner1 input').val(),$('.spinner2 input').val(),+cant_dias);
            array= [num,nombre,$('.spinner1 input').val(),$('.spinner2 input').val(),fech,fech2,cant_dias,costo_total];
            //  if(lleno(fech,$('.spinner1 input').val(),$('.spinner2 input').val())){

              //    alert('no hay espacio');
              //}else{
                  res.push(array);
              //}
      //      console.log(res);
            limpiar();
            imprimir();
        }

          function lleno(fech:fecha.Fecha,tipo1:number,tipo2:number):boolean{
            var cant_cuarto1,cant_cuarto2:number;
            var diarenta, cuarto1,cuarto2:number;
              diarenta = fecha.Fecha.tomardia(fech);
              var  cuart1:number = tipo1;
              var cuart2:number= tipo2;
              var num11m,num22:number;
              // console.log(res.length);
            for(var i = 0; i< res.length; i++){
              var la_fech1,la_fech2,d_c : fecha.Fecha;
              la_fech1 = res[i][4];
              la_fech2 = res[i][5];

              if(diarenta >= fecha.Fecha.tomardia(la_fech1) ){

                  cuart1 = parseInt( cuart1 +res[i][2]) ;
                  cuart2 = parseInt(cuart2 +  res[i][3]) ;
                    }
              }
              console.log(cuart1);
            if(cuart1>=10 || cuart2>=10){
              return true;
            } else{
             return false;
            }
          }
          function limpiar(){
            $('.spinner1 input').val(0);
            $('.spinner2 input').val(0);
                $('#datepicker1').val('');
                $('#datepicker2').val('') ;
                $("#dias").val(0);
                $("#costo_cuarto").val(0);
                $('#nombre_per').val(" ");
                $('#reserv').val((+$('#reserv').val()+1));
          };

          function imprimir(){
            // $("#table_reservaciones > tr").remove();
              $("#table_reservaciones tbody >  tr").remove();
              for(var i = 0; i< res.length; i++){
                var la_fech1,la_fech2,d_c : fecha.Fecha;
                la_fech1 = res[i][4];
                la_fech2 = res[i][5];
                d_c = res[i][6];
                 $('#table_reservaciones').append('<tr><td>' + res[i][0] + '</td> <td>' + res[i][1] + '</td><td>' + res[i][2] + '</td> <td>' + res[i][3] + '</td>'+
                '<td>' + la_fech1.getdate()+ ' </td><td>'+ la_fech2.getdate()+' </td><td>'+  d_c+' </td><td>'+  res[i][7]+' </td><td><button type="button" id="'+ i +'" class="cons_ind btn btn-primary">Consultar</button></td><td><button type="button" id="'+ i +'"  class="eliminar btn btn-danger">Eliminar</button></td></tr>');

              }
          }

});
