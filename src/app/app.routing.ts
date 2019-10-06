import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards';
import { HtcHomeComponent } from './htc-home/htc-home.component';
import { HtcComponentComponent } from './htc-component/htc-component.component';
import { HtcDocComponent } from './htc-doc/htc-doc.component';
import { HtcStatisticsComponent } from './htc-statistics/htc-statistics.component';
import { HtcTeamComponent } from './htc-team/htc-team.component';
import { HtcBlogComponent } from './htc-blog/htc-blog.component';
import { ComponentOverviewComponent } from './htc-doc/Docrepository/component-overview/component-overview.component';
import { FrontendComponentComponent } from './htc-doc/Docrepository/frontend-component/frontend-component.component';
import { BackendComponentComponent } from './htc-doc/Docrepository/backend-component/backend-component.component';
import { ServicesComponent } from './htc-doc/Docrepository/services/services.component';
import { SecurityComponent } from './htc-doc/Docrepository/security/security.component';
import { UsabilityComponent } from './htc-doc/Docrepository/usability/usability.component';
import { GlobalComponent } from './htc-doc/Docrepository/frontend-component/global/global.component';
import { NavigationComponent } from './htc-doc/Docrepository/frontend-component/navigation/navigation.component';
import { FormComponent } from './htc-doc/Docrepository/frontend-component/form/form.component';
import { ExtraComponent } from './htc-doc/Docrepository/frontend-component/extra/extra.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', component: HtcHomeComponent, canActivate: [AuthGuard] },
            { path: 'Components', component: HtcComponentComponent, canActivate: [AuthGuard] },
            { path: 'Documentaion', component: HtcDocComponent, 
            children:[
                {path: '', component: ComponentOverviewComponent, canActivate: [AuthGuard]},
                {path: 'Components_Overview', component: ComponentOverviewComponent, canActivate: [AuthGuard]},
                {path: 'Frontend_Component', component: FrontendComponentComponent, 
                children: [
                    {path: 'Global', component: GlobalComponent, canActivate: [AuthGuard]},
                    {path: 'Navigation', component: NavigationComponent, canActivate: [AuthGuard]},
                    {path: 'Form', component: FormComponent, canActivate: [AuthGuard]},
                    {path: 'Extra', component: ExtraComponent, canActivate: [AuthGuard]},
                ],
                canActivate: [AuthGuard]},
                {path: 'Backend_Component', component: BackendComponentComponent, canActivate: [AuthGuard]},
                {path: 'Services', component: ServicesComponent, canActivate: [AuthGuard]},
                {path: 'Security', component: SecurityComponent, canActivate: [AuthGuard]},
                {path: 'Usability', component: UsabilityComponent, canActivate: [AuthGuard]},
                {path: '**', component: ComponentOverviewComponent, canActivate: [AuthGuard]},
            ],
            canActivate: [AuthGuard] },
            { path: 'Statistics', component: HtcStatisticsComponent, canActivate: [AuthGuard] },
            { path: 'Team', component: HtcTeamComponent, canActivate: [AuthGuard] },
            { path: 'Blog', component: HtcBlogComponent, canActivate: [AuthGuard] }
        ],
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, {onSameUrlNavigation: "reload"});