import { ElementRef,Directive,Input } from '@angular/core';

@Directive({
  selector: '[appStatusColor]'
})
export class StatusColorDirective {
  @Input('appStatusColor') inputStatus: any;

  constructor(el: ElementRef) {
    //el.nativeElement.style.color = 'yellow';
    console.log(this.inputStatus);
    
  }
}

