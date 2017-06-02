import * as Rollbar from 'rollbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RollbarErrorHandler, useFactory } from './rollbar/rollbar.error.handler';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeaderModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    { provide: Rollbar, useFactory },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
