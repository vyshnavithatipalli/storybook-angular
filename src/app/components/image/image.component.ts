import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input()
  imgSrc: string = 'assets/pondicherry_french_hotel.jpg';

  @Input()
  altTxt?: string = 'Pondicherry French Hotel';

  @Input()
  figCaptionTxt?: string =
    'optional caption';

  @Input()
  imgOpacity?: number = 1;

  constructor() {}

  ngOnInit(): void {}

}
