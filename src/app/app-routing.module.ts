
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';



const appRouter: Routes = [
  {
    path: '', redirectTo: 'users', pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: './modules/auth/auth.module#AuthModule'
  },
  {
      path: '',
      component: LayoutComponent,
      children:[
          {
          path: '',
          loadChildren: './modules/home/home.module#HomeModule'
      },
      {
        path: '',
        loadChildren: './modules/users/users.module#UsersModule'
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouter)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{};
