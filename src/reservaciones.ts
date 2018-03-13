import {fecha} from './fech';
export namespace reserv{

// year month day
    export  class Reservacion extends fecha.Fecha{
      n_res:number;
      nombre:string;
      tipo_h:string;
      cant:number;
      fecha_ent:fecha.Fecha;
      fecha_sal:fecha.Fecha;
      dia_cant:number;
      costo:number;
        constructor(a:number,m:number ,d:number, ){
          super();
        }

      }

}
