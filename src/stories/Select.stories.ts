import { CommonModule } from "@angular/common";
import { ApplicationRef } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { from } from "rxjs";
import { SelectComponent } from "src/app/components/select/select.component";
import { MaterialModule } from "src/app/material/material.module";
import {action} from '@storybook/addon-actions';
storiesOf('Select',module)
.addDecorator(
    moduleMetadata({
        imports:[MaterialModule,CommonModule,BrowserAnimationsModule]

    })

)
.add('Default',()=>({
    component:SelectComponent,
    props:{
        selectData:{
            category:'FRUITS',
            selected:'Apple',
            options:[
                {
                    text:'Apple',
                    value:'Apple',
                },
                {
                    text:'Banana',
                    value:'Banana',
                }
            ]
        }
    }
}))
.add('Output handled',()=>({
    component:SelectComponent,
    props:{
      
        selectData:{
            category:'FRUITS',
            selected:'Apple',
            options:[
                {
                    text:'Apple',
                    value:'Apple',
                },
                {
                    text:'Banana',
                    value:'Banana',
                }
            ]
        },
    
    selectionChange: action("Selection changed")
    }
}))