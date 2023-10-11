import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list:Product[],x:string): Product[] {
    return list.filter((i)=> i.title.toLowerCase().includes(x.toLowerCase()));
  }

}
