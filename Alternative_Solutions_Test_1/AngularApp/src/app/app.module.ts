import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientServiceService } from './client-service.service';
import { FormsModule } from '@angular/forms';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientcreationComponent } from './clientcreation/clientcreation.component';

@NgModule({
  declarations: [AppComponent, ClientlistComponent, ClientcreationComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ClientServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
