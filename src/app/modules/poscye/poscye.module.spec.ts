import { PoscyeModule } from './poscye.module';

describe('PoscyeModule', () => {
  let poscyeModule: PoscyeModule;

  beforeEach(() => {
    poscyeModule = new PoscyeModule();
  });

  it('should create an instance', () => {
    expect(poscyeModule).toBeTruthy();
  });
});
