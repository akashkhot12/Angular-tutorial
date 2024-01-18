import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { IfElseComponent } from './if-else/if-else.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    IfElseComponent,
    SwitchCaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
