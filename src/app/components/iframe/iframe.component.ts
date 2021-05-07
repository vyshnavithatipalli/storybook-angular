import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit,AfterViewInit {
@Input() url:any;
  constructor(private sanitizer:DomSanitizer,private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.cd.detectChanges();
  }
  getsafeurl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
