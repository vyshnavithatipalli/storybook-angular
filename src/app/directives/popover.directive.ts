import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPopover]'
})
export class PopoverDirective implements OnInit {
@Input('appPopover') popoverText:any;
@Input() placement:string;
@Input() delay:number;
popover:HTMLElement;
offset:10;

  constructor(private el:ElementRef,private renderer :Renderer2) { }
  ngOnInit(): void {
    
  }
  @HostListener('mouseenter') onMouseEnter(){
    if(!this.popover){
      this.show();
    }
  }
  @HostListener('mouseleave') onMouseLeave(){
    if(this.popover){
      this.hide();
    }
  }

  show(){
    this.create();
    this.setPosition();
    this.renderer.addClass(this.popover,'ng-popover-show');
  }
  hide(){
    this.renderer.removeClass(this.popover,'ng-popover-show');
    window.setTimeout(()=>{
      this.renderer.removeChild(document.body,this.popover);
      this.popover=null;
    },this.delay);
  }
  
create(){
  this.popover=this.renderer.createElement("div");
  for(var i in this.popoverText){
    for(var j in this.popoverText[i]){
    let keyValuePair=this.renderer.createElement("div");
    let key=this.renderer.createElement("span");
    this.renderer.addClass(key,'popover-key');
    this.renderer.appendChild(key,this.renderer.createText(j +': '));
    this.renderer.appendChild(keyValuePair,key);
    this.renderer.appendChild(
      keyValuePair,
      this.renderer.createText(this.popoverText[i][j]),
    );
    this.renderer.appendChild(this.popover,keyValuePair);
  }
}
this.renderer.appendChild(document.body,this.popover);
this.renderer.addClass(this.popover,'ng-popover');
this.renderer.addClass(this.popover,'ng-popover-${this.placement}');
this.renderer.setStyle(this.popover,'-webkit-transition','opacity ${this.delay}ms');
this.renderer.setStyle(this.popover,'-moz-transition','opacity ${this.delay}ms');
this.renderer.setStyle(this.popover,'-o-transition','opacity${this.delay}ms');
this.renderer.setStyle(this.popover,'transition','opacity${this.delay}ms');


}
setPosition(){
  const hostPos=this.el.nativeElement.getBoundingClientRect();
  const popoverPos=this.popover.getBoundingClientRect();
  const scrollPos=window.pageYOffset||
  document.documentElement.scrollTop||
  document.body.scrollTop||
  0;
  let top,left;
  if(this.placement==='top'){
    top=hostPos.top -popoverPos.height -this.offset;
    left=hostPos.left+(hostPos.width-popoverPos.width)/2;

  }
  if(this.placement==='bottom'){
    top=hostPos.bottom +this.offset;
    left=hostPos.left+(hostPos.width-popoverPos.width)/2;

  }
  if(this.placement==='left'){
    left=hostPos.left -popoverPos.width -this.offset;
    top=hostPos.top+(hostPos.height-popoverPos.height)/2;

  }
  if(this.placement==='right'){
    left=hostPos.right +this.offset;
    top=hostPos.top+(hostPos.height-popoverPos.height)/2;

  }
  this.renderer.setStyle(this.popover,'top','${top+scrollPos}px');
  this.renderer.setStyle(this.popover,'left','${left}px');

}


}
