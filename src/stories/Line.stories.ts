import { moduleMetadata, storiesOf } from "@storybook/angular";
import { ChartsModule } from "ng2-charts";
import { LineComponent } from "src/app/components/line/line.component";

storiesOf('Line Chart',module)
.addDecorator(moduleMetadata({imports:[ChartsModule]}))
.add('Single Line',()=>({
    component:LineComponent,
    props:{
        data:{
            showLegend:false,
            chartLabels:['Jan','Feb','Mar','Apr','May','jun'],
            chartData:[
                {
                data:[80,76,65,67,65,78],
                label:'Cars'
            }
        ]
        }
    }
}))
.add('Multi line',()=>({
    component:LineComponent,
    props:{
        data:{
            showLegend:false,
            chartLabels:['Jan','Feb','Mar','Apr','May','jun'],
            chartData:[
                {
                data:[80,76,65,67,65,78],
                label:'Cars'
            },
            {
                data:[78,76,76,78,45,45],
                label:'trucks'
            }
        ]
        }
    }
}))
