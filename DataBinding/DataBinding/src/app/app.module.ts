import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { PropertyComponent } from './property/property.component';
import { TwowayComponent } from './twoway/twoway.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    PropertyComponent,
    TwowayComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
