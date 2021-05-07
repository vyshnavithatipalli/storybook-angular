import { CommonModule } from "@angular/common";
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { SummaryListComponent } from "src/app/components/summary-list/summary-list.component";
import { MaterialModule } from "src/app/material/material.module";

storiesOf('SummaryList',module)
.addDecorator(moduleMetadata({imports:[MaterialModule,CommonModule]}))
.add('Default',()=>({
    component:SummaryListComponent,
    props:{
        list:[
            {
                text:'max',
                count:3
            },
            {
                text:'min',
                count:3
            },

            {
                text:'mod',
                count:3
            },

            {
                text:'total',
                count:9
            },

        ]
    }
}))