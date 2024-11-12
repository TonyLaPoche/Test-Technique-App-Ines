import {Routes} from "@angular/router";

const spellsRoutes: Routes = [
    {
        path: 'spells',
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadComponent: () => import('./spells.page').then(c => c.SpellsPage),
            },
        ]
    }
];

export default spellsRoutes;