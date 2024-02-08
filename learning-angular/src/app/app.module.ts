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
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './UI/forms/forms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ToDoListComponent } from './mini-Pro/to-do-list/to-do-list.component';
import { ChildComponent } from './parentChild/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PropertyBindingComponent,
    ConditionsComponent,
    LoopingComponent,
    NestedLoopComponent,
    HeaderComponent,
    FormsComponent,
    ToDoListComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule, 
    MatDividerModule,
     MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
