import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const tabsRoutes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'wizards',
        loadComponent: () => import('../wizards/wizards.page').then( m => m.WizardsPage)
      },
      {
        path: 'spells',
        loadComponent: () => import('../spells/spells.page').then( m => m.SpellsPage)
      },
      {
        path: '',
        redirectTo: 'wizards',
        pathMatch: 'full',
      },
    ],
  },
];
