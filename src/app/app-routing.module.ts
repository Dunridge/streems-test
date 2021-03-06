import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {AppComponent} from './app.component';
import {PostsComponent} from './components/posts/posts.component';
import {AppLayoutComponent} from './app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'users/:userId',
        component: PostsComponent
      },
      {
        path: '',
        component: AppComponent,
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
