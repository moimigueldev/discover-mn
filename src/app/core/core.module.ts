import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { NavComponent } from '../nav/nav.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { FortuneComponent } from '../fortune/fortune.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ExploreComponent } from '../explore/explore.component';
import { EventsComponent } from '../events/events.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    FortuneComponent,
    ExploreComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModuleModule,
    HttpClientModule
  ],
  exports: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    FortuneComponent,
    ExploreComponent,
    EventsComponent
  ]
})
export class CoreModule { }
