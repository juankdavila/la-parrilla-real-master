import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { MoreComponent } from './components/more/more.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },  
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'more', component: MoreComponent },
];