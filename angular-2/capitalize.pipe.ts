import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  standalone: true,
  name: 'capitalizePipe'
})

export class capitalizePipe implements PipeTransform {
  transform(name: string): string {
    return name.split(' ').map(n => n.substring(0, 1).toUpperCase() + n.substring(1).toLowerCase()).join(' ');
  }
}