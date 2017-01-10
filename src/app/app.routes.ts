import { NoContentComponent } from './no-content/no-content.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'photo', pathMatch: 'full' },
  { path: 'photo', component: PhotoListComponent },
  { path: 'photo/:id', component: PhotoDetailComponent },
  { path: '**',    component: NoContentComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
