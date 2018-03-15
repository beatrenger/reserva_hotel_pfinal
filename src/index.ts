import {fecha} from './fech';
import {reserv} from './reservaciones';
import  './styles.scss';
import  $ from 'jquery';

var res: reserv.Reservacion;
var fech: fecha.Fecha;

$(document).ready(function(e) {
// suma
  $('#reservar').on('click',function(){
    alert('reservar');
  });
  $('#consultar').on('click',function(){
    alert('consultar');
  });
  $('#lista').on('click',function(){
    alert('lista');
  });
  $('.eliminar').on('click',function(){
    alert('eliminar');
  });
  $('.cons_ind').on('click',function(){
    alert('consultar 2');
  });

        function agregar_reservacion(){

      }


});
