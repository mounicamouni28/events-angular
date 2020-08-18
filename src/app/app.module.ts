import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ChangeUsernameComponent } from './components/change-username/change-username.component';
import { FormsModule } from "@angular/forms";
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RangeSelectComponent } from './components/range-select/range-select.component';
import { StopWatchComponent } from './components/stop-watch/stop-watch.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ChangeUsernameComponent,
    ChangePasswordComponent,
    RangeSelectComponent,
    StopWatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
