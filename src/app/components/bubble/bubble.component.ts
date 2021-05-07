
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { circleMarker, CircleMarker, latLng, MapOptions, tileLayer } from 'leaflet';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit,AfterViewInit{
mapOptions: MapOptions;
@Input() data;
circleMarkers:CircleMarker[]=[];
color:string;

  constructor() { 
   
  }

  ngOnInit(): void {

    this.initMapOptions();
  }
ngAfterViewInit(){
this.makeDataMarkers();
}
private initMapOptions(){
  this.mapOptions={
    layers:[
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution:'&copy;Attribution',

      }),
    ],
    zoom:1,
    center:latLng([46.227,2.213]),
  };
  console.log(this.mapOptions)
}
makeDataMarkers(){
  
  console.log(this.data.data)
  for(var c in this.data.data){
    const lat=(this.data.data[c]["coordinates"][0]);
    const lon=(this.data.data[c]["coordinates"][1]);
    const circlemarker=circleMarker([lat,lon],{
      radius:this.data.data[c]["count"],
      fillOpacity:0.5,
      color:'White',
      fillColor:this.getMarkerColor(this.data.data[c]["color"]),
      weight:1,

    })
    
    var customPopup='<b>Vehicle: </b>' +this.data.data[c]["vehicleType"] + '<br><b>Count:</b>'+this.data.data[c]["count"];
  
    circlemarker.bindPopup(customPopup);
    circlemarker.on('mouseover',function(e){
      this.openPopup();
    });
    circlemarker.on('mouseout',function(e){
      this.closePopup();
    });
    this.circleMarkers.push(circlemarker);
    console.log(this.circleMarkers)

  }
}

getMarkerColor(env:String){
  switch(env){
    case "red":
      this.color="red"
    case "black":
      this.color="red";
      break;
    default:
      this.color="orange"
  }
  return this.color;
}
}
