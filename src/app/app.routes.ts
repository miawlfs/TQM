import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServbenComponent } from './components/servben/servben.component';
const APP_ROUTES : Routes = [
  { path: 'home', component: HomeComponent },
{ path: 'servicios', component: ServbenComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'servicios' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
