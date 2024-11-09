import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const tabsRoutes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'wizards',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () => import('../wizards/wizards.route')
      },
      {
        path: 'spells',
        loadComponent: () => import('../spells/spells.page').then(c => c.SpellsPage)
      },
    ],
  },
];
