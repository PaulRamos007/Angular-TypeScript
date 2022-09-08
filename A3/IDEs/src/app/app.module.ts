import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IDEDetailsComponentComponent } from './idedetails-component/idedetails-component.component';
import { IDEsComponentComponent } from './ides-component/ides-component.component';

@NgModule({
  declarations: [
    AppComponent,
    IDEDetailsComponentComponent,
    IDEsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
