import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { NavComponent } from '../nav/nav.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class CoreModule { }
