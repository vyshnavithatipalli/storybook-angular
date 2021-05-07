import { RouterTestingModule } from "@angular/router/testing";
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { of } from "rxjs";
import { TabsComponent } from "src/app/components/tabs/tabs.component";
import { MaterialModule } from "src/app/material/material.module";

storiesOf('Tabs',module)
.addDecorator(moduleMetadata({imports:[MaterialModule,RouterTestingModule]}))
.add('Default',()=>{
    const tableItems$=of([
        {
            source:'Tab1',
            title:'Tab 1',
            home_slug:'home 1',
            slug:'Tab 1'
        },
        {
            source:'Tab2',
            title:'Tab 2',
            home_slug:'home 2',
            slug:'Tab 2'
        }
    ]);
    return {
        component:TabsComponent,
        props:{
            tableItems$:tableItems$
        }
    };
});