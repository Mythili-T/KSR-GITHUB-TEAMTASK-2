import { Pipe,PipeTransform } from "@angular/core";
import { Car } from "./car";

@Pipe({
  name:'filterCar'
})

export class FilterPipe implements PipeTransform{
  filteration:string=''
  transform(cars:Car[], searchValue:String) {
   if(cars.length===0|| searchValue===''){
       return cars;
   }
   else{
    return cars.filter((car)=>
    {

      console.log(car.name=== searchValue)
    })
  }

  }
}
