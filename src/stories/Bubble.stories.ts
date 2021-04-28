import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { BubbleComponent } from "src/app/components/bubble/bubble.component";
import {HttpClientModule }from '@angular/common/http';

storiesOf('Bubble Chart',module)
.addDecorator(moduleMetadata({imports:[LeafletModule,HttpClientModule]}))
.add('Default',()=>({
    component:BubbleComponent,
    props:{
        data:{
            data:[
                {
                    vehicleType:'Car',
                    color:'red',
                    count:13,
                    type:'Point',
                    coordinates:[22.3699,114.1144]
                }
            ]
        }
    }
}));