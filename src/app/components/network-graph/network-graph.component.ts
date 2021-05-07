
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {Node,Edge} from '@Swimlane/ngx-graph';

@Component({
  selector: 'app-network-graph',
  templateUrl: './network-graph.component.html',
  styleUrls: ['./network-graph.component.scss']
})
export class NetworkGraphComponent implements OnInit {
@Input('item') graphCardItems:any;
@Input('popover$') popover$:any;
isPopover:any; 
public edges:Edge;
public nodes:Node;
public popoverKeys:any;
public children:any;
public popOverData:any;
public popOverText:any;
public nodesCopy:any;
public edgesCopy:any;

  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    
    
    this.edges=this.graphCardItems.data.edges;
    this.nodes=this.graphCardItems.data.nodes;
    this.popover$.subscribe(x=>this.isPopover=x);
    this.nodesCopy=JSON.parse(JSON.stringify(this.nodes));
    this.edgesCopy=JSON.parse(JSON.stringify(this.edges));
    if(this.isPopover){
      this.popoverKeys=this.graphCardItems.items[0].fieldType;
      this.createPopOver();
    }
  }
  createPopOver(){
    for(var i in this.nodesCopy){
      this.popOverText={};
      this.popOverData=[];
      for(var j in this.popoverKeys){
        if(this.nodesCopy[i].hasOwnProperty(this.popoverKeys[j])){
          this.popOverText[this.popoverKeys[j]]=this.nodesCopy[i][this.popoverKeys[j]];
        }
      }
      this.popOverData.push(this.popOverText);
      this.nodesCopy[i]['popover']=this.popOverData;
      console.log("hi",this.nodesCopy[i]['popover'])
      console.log("hello",this,this.popOverData)
    }
  }

}
