import{Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'sort'
})
export class CustomSortPipe implements PipeTransform{
    transform(value:any[],args:string):any{
        if(args=='ascending')
        {
            return value.sort();
        }else if(args=='descending'){
            return value.sort().reverse();
        }
    }

}