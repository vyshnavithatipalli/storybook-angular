import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { action } from "@storybook/addon-actions";
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { SelectFilterComponent } from "src/app/components/select-filter/select-filter.component";
import { MaterialModule } from "src/app/material/material.module";

storiesOf('Select Filter',module)
.addDecorator(moduleMetadata({
    imports:[MaterialModule,CommonModule,BrowserAnimationsModule]
}))
.add('Default',()=>({
    component:SelectFilterComponent,
    props:{
        hiddenColumnsList:['Name','Cost','Symbol']
    }
}))
.add('Output Handled',()=>({
    component:SelectFilterComponent,
    props:{
        hiddenColumnsList:['Name','Cost','Symbol'],
        toggleAllSelectEvent:action('Toggle All'),
        togglePerOneEvent:action('Toggleone')
    }
}))