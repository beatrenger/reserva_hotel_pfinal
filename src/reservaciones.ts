
export namespace reserv{
// year month day
    export  class Reservacion extends Array {
     cuarto1:number = 1000;
     cuarto2:number = 1500;
        constructor(){
          super();
        }

    static   calcular_precio(cant1:number,cant2:number,dias:number){
          return ((cant1*1000)*dias) +((cant2*1500)*dias);
        }

      }

}
