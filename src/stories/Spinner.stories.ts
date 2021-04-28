import { moduleMetadata, storiesOf } from "@storybook/angular";
import { SpinnerComponent } from "src/app/components/spinner/spinner.component";
import { MaterialModule } from "src/app/material/material.module";

storiesOf('Spinner',module)
.addDecorator(moduleMetadata({imports:[MaterialModule]}))
.add('Default',()=>({
component:SpinnerComponent
}));