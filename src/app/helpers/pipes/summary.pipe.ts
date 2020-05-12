import{Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value:string, args?:any){
        if(value.length>200)
        

       return value.substr(0, 200) + ' ... ';
    }
}