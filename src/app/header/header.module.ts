import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeaderComponent,
    NavbarComponent
  ],
  exports: [
    HeaderComponent,
    NavbarComponent
  ],
})
export class HeaderModule { }
