
import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from 'lodash-es';

@Pipe({
    name: 'isActive'
})
export class isActivePipe implements PipeTransform {

    // {{ user.isActive | isActive:'Enabled':'Disabled' }}      =>>> manualValue  =>>>  true->Enabled   , false->Disabled
    // {{ user.isActive | isActive }}                           =>>> defaultValue =>>>  true->Active    , false->Insactive
    transform(value: boolean | undefined, trueText: string = 'فعال', falseText: string = 'غیرفعال') {
        if (isUndefined(value))
            return '';
        return value ? trueText : falseText;
    }
}