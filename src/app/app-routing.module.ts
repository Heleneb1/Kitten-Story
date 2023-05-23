import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCreateKittenComponent } from './app-create-kitten/app-create-kitten.component';
import { AppUserKittenComponent } from './app-user-kitten/app-user-kitten.component';
import { AppListKittenComponent } from './app-list-kitten/app-list-kitten.component';

const routes: Routes = [
  { path: 'create', component: AppCreateKittenComponent },
  { path: 'user', component: AppUserKittenComponent },
  { path: 'list', component: AppListKittenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
