
export namespace reserv{
// year month day
    export  class Reservacion extends Array {
        constructor(){
          super();
        }

    static   calcular_precio(cant1:number,cant2:number,dias:number):number{

          return ((cant1*1000)+(cant2*1500))*dias;
        }

        static eliminar_index(array: Reservacion, numb:number):Reservacion{
          array.splice(numb,1);
            return array;
        }

      }

}
