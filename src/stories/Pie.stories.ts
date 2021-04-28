import { moduleMetadata, storiesOf } from "@storybook/angular";
import { ChartsModule } from "ng2-charts";
import { PieComponent } from "src/app/components/pie/pie.component";

storiesOf('Pie Chart',module)
.addDecorator(moduleMetadata({imports:[ChartsModule]}))
.add('Default',()=>({
    component:PieComponent,
    props:{
        data:{
            showLegend:false,
            chartLabels:['Jab','Feb','Mar','Apr','May','Jun'],
            chartData:[23,45,56,45,67,56]
        }
    }
}))