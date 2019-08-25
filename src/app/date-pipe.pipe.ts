import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(date: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(date-todayWithNoTime) 
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001; 
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && date > todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
