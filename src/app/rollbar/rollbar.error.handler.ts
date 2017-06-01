import * as Rollbar from 'rollbar';
import { ErrorHandler, Injectable, Injector } from '@angular/core';

@Injectable()
class RollbarErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) { }
  handleError(err): void {
    const rollbar = this.injector.get(Rollbar);
    rollbar.error(err.originalError || err);
  }
}

const rollbarConfig = {
  accessToken: 'c06b4919cc0d49ee813c235131c50cb5',
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: 'staging'
  }
};

function useFactory () {
  return new Rollbar(rollbarConfig);
}

export {RollbarErrorHandler, useFactory};
