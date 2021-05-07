import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { of } from "rxjs";
import { NetworkGraphComponent } from "src/app/components/network-graph/network-graph.component";
import { MaterialModule } from "src/app/material/material.module";
import {NgxGraphModule} from "@swimlane/ngx-graph";
import { PopoverDirective } from "src/app/directives/popover.directive";

storiesOf('Network Chart',module)
.addDecorator(moduleMetadata({imports:[MaterialModule,CommonModule,NgxGraphModule,BrowserAnimationsModule],declarations:[
    PopoverDirective]
}))
.add('Default',()=>{
    const popover$=of(true);
    return ({
        component:NetworkGraphComponent,
        props:{
            popover$:popover$,
            item:{
                "component":"NETWORK_DIAGRAM",
                "data":{
                    "nodes":[
                        {
                            "id":"10001",
                            "label":"sever1",
                            "img":"/assets/node.png"
                        },
                        {
                            "id":"10005",
                            "label":"sever1",
                            "img":"/assets/node.png"
                        },
                        {
                            "id":"10006",
                            "label":"sever1",
                            "img":"/assets/node.png"
                        },
                        {
                            "id":"10007",
                            "label":"sever1",
                            "img":"/assets/node.png"
                        },
                        {
                            "id":"10008",
                            "label":"sever1",
                            "img":"/assets/node.png"
                        }
                    ],
                    "edges":[
                        {
                            "idNumber":100,
                            "sourceNumber":10001,
                            "targetNumber":10005,
                            "id":"edge100",
                            "source":"10001",
                            "target":"10005"
                        },
                        {
                            "idNumber":101,
                            "sourceNumber":10001,
                            "targetNumber":10006,
                            "id":"edge101",
                            "source":"10001",
                            "target":"10006"
                        },
                        {
                            "idNumber":102,
                            "sourceNumber":10001,
                            "targetNumber":10007,
                            "id":"edge102",
                            "source":"10001",
                            "target":"10007"
                        },
                        {
                            "idNumber":103,
                            "sourceNumber":10001,
                            "targetNumber":10008,
                            "id":"edge103",
                            "source":"10001",
                            "target":"10008"
                        }
                    ]
                },
                "items":[
                    {
                       "component":"POPOVER",
                        "fieldType":[
                            "id",
                            "label"
                        ]
                    }
                ]
            }
        }
    })

});