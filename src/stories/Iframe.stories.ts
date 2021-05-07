import { moduleMetadata, storiesOf } from "@storybook/angular";
import { IframeComponent } from "src/app/components/iframe/iframe.component";

storiesOf('IFrame',module)
.addDecorator(moduleMetadata({imports:[]}))
.add('Default',()=>({
    component:IframeComponent,
    props:{
        url:"https://www.w3schools.com"
    }
}));