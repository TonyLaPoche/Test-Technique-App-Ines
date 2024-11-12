import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'joinAndFormat',
    standalone: true
})
export class JoinAndFormatPipe implements PipeTransform {

    transform(value: (string| null | undefined)[], separator: string = " · ", hasTitle: boolean = true): string {
        return value.filter(Boolean).map(name => {
            if (name && hasTitle && name.length > 1 && !(/^\d+$/.test(name)) && /^[a-zA-Z]/.test(name) ) {
                return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
            }
            return name
        }).join(separator)
    }
}
