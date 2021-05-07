import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './components/image/image.component';
import { BarComponent } from './components/bar/bar.component';
import { BubbleComponent } from './components/bubble/bubble.component';
import {ChartsModule} from 'ng2-charts';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import { LineComponent } from './components/line/line.component';
import { PieComponent } from './components/pie/pie.component';
import { RadarComponent } from './components/radar/radar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { IframeComponent } from './components/iframe/iframe.component';
import { NetworkGraphComponent } from './components/network-graph/network-graph.component';
import {NgxGraphModule} from '@swimlane/ngx-graph';
import { PopoverDirective } from './directives/popover.directive';
import { TabsComponent } from './components/tabs/tabs.component';
import { SelectComponent } from './components/select/select.component';
import { SelectFilterComponent } from './components/select-filter/select-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SummaryListComponent } from './components/summary-list/summary-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    BarComponent,
    BubbleComponent,
    DoughnutComponent,
    LineComponent,
    PieComponent,
    RadarComponent,
    SpinnerComponent,
    IframeComponent,
    NetworkGraphComponent,
    PopoverDirective,
    TabsComponent,
    SelectComponent,
    SelectFilterComponent,
    SummaryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    LeafletModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxGraphModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
