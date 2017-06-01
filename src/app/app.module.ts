import Rollbar = require('rollbar');
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

const rollbarConfig = {
  accessToken: 'c06b4919cc0d49ee813c235131c50cb5',
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: 'development'
  }
};

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) { }
  handleError(err: any): void {
    const rollbar = this.injector.get(Rollbar);
    rollbar.error(err.originalError || err);
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    { provide: Rollbar,
      useFactory: () => {
        return new Rollbar(rollbarConfig);
      }
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
