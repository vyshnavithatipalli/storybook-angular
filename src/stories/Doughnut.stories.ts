import { moduleMetadata, storiesOf } from "@storybook/angular";
import { ChartsModule } from "ng2-charts";
import { DoughnutComponent } from "src/app/components/doughnut/doughnut.component";

storiesOf('Doughnut chart',module)
.addDecorator(moduleMetadata({imports:[ChartsModule]}))
.add('Default',()=>({
    component:DoughnutComponent,
    props:{
        data:{
            showLegend:false,
            chartLabels:['Jan','Feb','Mar','Apr','May','Jun'],
            chartData:[80,72,78,75,76,78]

        }
    }
    
}));
