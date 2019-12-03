import{Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'limit'
})
export class LimitPipe implements PipeTransform{
    transform(value:string, args?:any){
        if(!value)
        return null;
        
        let integer = parseInt(value, 10);
        if(integer>10000)
        return value;
        else{return 'inferior to 10000'}
        
       
    }
}