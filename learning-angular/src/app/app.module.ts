import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './task/counter/counter.component';
import { PropertyBindingComponent } from './task/property-binding/property-binding.component';
import { ConditionsComponent } from './task/conditions/conditions.component';
import { LoopingComponent } from './task/looping/looping.component';
import { NestedLoopComponent } from './task/nested-loop/nested-loop.component';
import { HeaderComponent } from './UI/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PropertyBindingComponent,
    ConditionsComponent,
    LoopingComponent,
    NestedLoopComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
