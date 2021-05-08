import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTableNestDirective]'
})
export class TableNestDirectiveDirective {
@Input() item;
  constructor(public viewContainerRef:ViewContainerRef) { }

}
