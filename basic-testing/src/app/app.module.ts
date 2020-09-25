import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { SimpleService } from './simple.service';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SimpleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
