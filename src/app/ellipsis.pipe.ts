import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, length: number): string {
    if (value.length > length) {
      return value.substr(0, length) + '...';
    }
    return value;
  }
}
