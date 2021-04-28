import { moduleMetadata, storiesOf } from "@storybook/angular";
import { ChartsModule } from "ng2-charts";
import { PieComponent } from "src/app/components/pie/pie.component";
import { RadarComponent } from "src/app/components/radar/radar.component";

storiesOf('Radar Chart',module)
.addDecorator(moduleMetadata({imports:[ChartsModule]}))
.add('Default',()=>({
    component:RadarComponent,
    props:{
        data:{
            showLegend:false,
            chartLabels:['Jab','Feb','Mar','Apr','May','Jun'],
            chartData:[{
                data:[23,45,56,45,67,56],
                label:'cars'
            }
            ]
        }
    }
}))