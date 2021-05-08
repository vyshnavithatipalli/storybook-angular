import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { TableRowsComponent } from "src/app/components/table-rows/table-rows.component";
import { MaterialModule } from "src/app/material/material.module";

storiesOf('Table Rows',module)
.addDecorator(moduleMetadata({
    imports:[MaterialModule,CommonModule,BrowserAnimationsModule],
    declarations:[]
})
)
.add('default',()=>{
    return ({
        component:TableRowsComponent,
        props:{
            item:{
                displayedColumns:[
                    {
                        name:"id",
                        visibility:true,
                        title:"ID"
                    },
                    {
                        name:"name",
                        visibility:true,
                        title:"NAME"
                    },
                    {
                        name:"cost",
                        visibility:true,
                        title:"COST"
                    },
                    {
                        name:"symbol",
                        visibility:false,
                        title:"SYMBOL"
                    }
                
                ],
                ELEMENT_DATA:[
                    {id:1,name:'carbon',cost:'12',symbol:'C'},
                    {id:2,name:'Nitrogen',cost:'14.07',symbol:'N'}
                ],
                ACTIONS:[
                    {
                        component:'BUTTON',
                        text:'view',
                        source:'/url',
                        paramFields:['id','name']
                    },
                    {
                        component:'BUTTON',
                        text:'view Detailed',
                        source:'/url',
                        paramFields:['id','name']
                    }
                ]
            }
        }
    })
})