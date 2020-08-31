import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '',         redirectTo: 'home',        pathMatch: 'full'    },
    { path: 'home',     loadChildren: './pages/home/home.module#HomePageModule'    },
    { path: 'list',     loadChildren: './pages/list/list.module#ListPageModule'    },
    { path: 'weather1', loadChildren: './pages/weather1/weather1.module#Weather1PageModule' },
    { path: 'weather2', loadChildren: './pages/weather2/weather2.module#Weather2PageModule' },
    { path: 'weather3', loadChildren: './pages/weather3/weather3.module#Weather3PageModule' },
    { path: 'weather4', loadChildren: './pages/weather4/weather4.module#Weather4PageModule' },
    { path: 'weather5', loadChildren: './pages/weather5/weather5.module#Weather5PageModule' },
    { path: 'weather6', loadChildren: './pages/weather6/weather6.module#Weather6PageModule' },
    { path: 'weather7', loadChildren: './pages/weather7/weather7.module#Weather7PageModule' },
    { path: 'weather8', loadChildren: './pages/weather8/weather8.module#Weather8PageModule' },
    { path: 'weather9', loadChildren: './pages/weather9/weather9.module#Weather9PageModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
{ }
