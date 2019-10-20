import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { NavComponent } from '../nav/nav.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { FortuneComponent } from '../fortune/fortune.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    FortuneComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModuleModule
  ],
  exports: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    FortuneComponent
  ]
})
export class CoreModule { }
