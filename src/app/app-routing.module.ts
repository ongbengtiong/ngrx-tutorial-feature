import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from "./welcome/welcome.component";

const appRoutes: Routes = [
  { path: 'app', component: WelcomeComponent },
  { path: 'ships', loadChildren: () => import('./starships/starships.module').then(m => m.StarshipsModule) },
  { path: 'ghostships', loadChildren: () => import('./ghostships/ghostships.module').then(m => m.GhostshipsModule) },
  { path: '', redirectTo: '/app', pathMatch: 'full' },
];
//  { path: 'ships', loadChildren: () => import('./starships/starships.module').then(m => m.StarshipsModule) },
// { path: 'ghostships', loadChildren: () => import('./ghostships/ghostships.module').then(m => m.GhostshipsModule) },


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
