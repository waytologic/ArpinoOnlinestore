import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'products' },
      {
        path: 'products',title:'Aprino Shopping',
        loadChildren: () =>
          import('src/app/features/catalog/catalog.module').then(
            (m) => m.CatalogModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('src/app/features/cart/cart.module').then((m) => m.CartModule),
        title: 'Arpino Shopping - Add Cart',
      },
      {
        path: 'account',
        loadChildren: () =>
          import('src/app/features/account/account.module').then(
            (m) => m.AccountModule
          ),
        title: 'Aprino shoping | Account ',
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import(
            'src/app/core/errors/pages/not-found-page/not-found-page.module'
          ).then((m) => m.NotFoundPageModule),
          title: 'Aprino shoping | Page Not Found ',
      },
      {
        path: '**',
        loadChildren: () =>
          import(
            'src/app/core/errors/pages/not-found-page/not-found-page.module'
          ).then((m) => m.NotFoundPageModule),
          title: 'Aprino shoping | Not Found ',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
