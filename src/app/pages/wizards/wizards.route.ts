import {Routes} from "@angular/router";

const wizardsRoutes: Routes = [
    {
        path: 'wizards',
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadComponent: () => import('./wizards.page').then(c => c.WizardsPage),
            },
            {
                path: ':id',
                loadComponent: () => import('./wizard-details/wizard-details.component').then(c => c.WizardDetailsComponent)
            }
        ]
    }
];

export default wizardsRoutes;