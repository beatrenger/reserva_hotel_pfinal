export namespace fecha{

// year month day
    export  class Fecha extends Date{
      dia_sem:number;
      d: Date;

        constructor(a:number,m:number ,d:number ){
          super();
          this.d = new Date(a,m,d);
        }
        getdia():number{
          return this.d.getDay();
        }
       getdate(): string{
         var weekday = ["domingo", "lunes","martes","miercoles", "jueves", "viernes", "sabado"]
         return weekday[this.d.getDay()] + " " + this.d.getDay()+"/"+this.d.getMonth()+"/"+this.d.getFullYear() ;
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
