import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ParticlesModule } from 'angular-particle';
import { ParallaxModule } from 'ngx-parallax';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro/intro.component';
import { ProductsComponent } from './products/products.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ParticlesModule,
    ParallaxModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    IntroComponent,
    ProductsComponent
  ]
})
export class HomeModule { }
