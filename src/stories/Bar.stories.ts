import { moduleMetadata, storiesOf } from "@storybook/angular";
import { ChartsModule } from "ng2-charts";
import { BarComponent } from "src/app/components/bar/bar.component";

storiesOf('Bar Chart',module)
.addDecorator(moduleMetadata({imports:[ChartsModule]}))
.add('Vertical',()=>({
    component:BarComponent,
    props:{
        data:{
            data:{
                showLegend:false,
                chartLabels:['Jan','Feb','Mar','Apr','May','Jun'],
                chartData:[
                    {
                        data:[80,75,60,12,23,23],
                        label:'Cars'
                    }
                ],
                chartType:'bar'

            }
        }
    }

}))
.add('Horizontal',()=>({
    component:BarComponent,
    props:{
        data:{
            data:{
                showLegend:false,
                chartLabels:['Jan','Feb','Mar','Apr','May','Jun'],
                chartData:[
                    {
                        data:[80,75,60,12,23,23],
                        label:'Cars'
                    }
                ],
                chartType:'horizontalBar'

            }
        }
    }

}))
.add('Multi bar',()=>({
    component:BarComponent,
    props:{
        data:{
            data:{
                showLegend:false,
                chartLabels:['Jan','Feb','Mar','Apr','May','Jun'],
                chartData:[
                    {
                        data:[80,75,60,12,23,23],
                        label:'Cars'
                    },
                    {
                        data:[60,67,665,67,67,65],
                        label:'Trucks'
                    }
                ],
                chartType:'horizontalBar'

            }
        }
    }
}))