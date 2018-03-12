import {numeros} from './racional';
import  './styles.scss';
import  $ from 'jquery';

$(document).ready(function(e) {
  var r,r1,r2,rr,resp: numeros.Racional;
// suma
  $('#suma').on('click',function(){
    procesa_suma();
  });

        function procesa_suma(){
          r = new numeros.Racional( $("#num1").val() ,$("#dem1").val());
          r2 = new numeros.Racional($("#num2").val() ,$("#dem2").val());
          resp = numeros.Racional.suma(r,r2);
           var resps = resp.disp();
           $("#respuesta").text(resps);

      }


});
