import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'join',
    standalone: true
})
export class JoinPipe implements PipeTransform {

    transform(value: string[], separator: string = " · "): string {
        return value.filter(Boolean).map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(separator)
    }

}
