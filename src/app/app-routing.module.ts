import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FortuneComponent } from './fortune/fortune.component';
import { ExploreComponent } from './explore/explore.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'fortune', component: FortuneComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'eventsmn', component: EventsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
