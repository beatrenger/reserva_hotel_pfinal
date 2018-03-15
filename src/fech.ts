export namespace fecha{

// year month day
    export  class Fecha {
      mes:number;
      dia:number;
      ano:number;
      dia_sem:number;
      d: Date;
        constructor(a:number,m:number ,d:number, ){
          this.mes = m;
          this.dia = d;
          this.ano = a;
          this.d = new Date(a,m,d);
        }
        getdia():number{
          return this.d.getDay();
        }
       getdate(): string{
         var weekday = [ "jueves","viernes","sabado", "domingo", "lunes", "martes","miercoles",]
         return weekday[this.d.getDay()] + " " + this.dia+"/"+this.mes+"/"+this.ano ;
        }
        static calc_date(date1:Fecha, date2:Fecha):string{
        if( date2.d.valueOf() >= date1.d.valueOf()){
              return  ((date2.d.valueOf() - date1.d.valueOf())/86400000).toString();
        } else {
          return "no es posible";
          }
        }
      }

}
