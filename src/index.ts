import {fecha} from './fech';
import {reserv} from './reservaciones';
import  './styles.scss';
import  $ from 'jquery';

var res: reserv.Reservacion;
var fech: fecha.Fecha;

$(document).ready(function(e) {
// suma
  $('#suma').on('click',function(){
    agregar_reservacion()
  });

        function agregar_reservacion(){
      }


});
