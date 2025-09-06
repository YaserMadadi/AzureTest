
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'have'
})
export class havePipe implements PipeTransform {

    // {{ user.isActive | have:'has':'doesn't have' }}          =>>> manualValue  =>>>  true->has   , false->doesn't have
    // {{ user.isActive | don't have }}                         =>>> defaultValue =>>>  true->have    , false->don't have
    transform(value: boolean | undefined, trueText: string = "have", falseText: string = "don't have") {
        if (!value)
            return '';
        return value ? trueText : falseText;
    }
}