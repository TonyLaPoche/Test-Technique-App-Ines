import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import wizardsRoutes from "../wizards/wizards.route";
import spellsRoutes from "../spells/spells.route";

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
        ...wizardsRoutes,
        ...spellsRoutes,
    ],
  },
];
