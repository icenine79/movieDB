import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  constructor(private elRef: ElementRef) { }

  @HostListener('click') toggleDropDown(){
    const buttonEl= this.elRef.nativeElement;
    const isOpen = buttonEl.classList.contains('open');
    buttonEl.classList.toggle('open', !isOpen);

  }

}
