import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
    { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },

    { path: 'w01', loadChildren: './blocks/weather/1/pages/home/home.module#HomePageModule' },
    { path: 'w02', loadChildren: './blocks/weather/2/pages/home/home.module#HomePageModule' },
    { path: 'w02/details', loadChildren: './blocks/weather/2/pages/details/details.module#DetailsPageModule' },

    { path: 'w03', loadChildren: './blocks/weather/3/pages/weather3.module#Weather3PageModule' },
    { path: 'w04', loadChildren: './blocks/weather/4/pages/weather4.module#Weather4PageModule' },
    { path: 'w05', loadChildren: './blocks/weather/5/pages/weather5.module#Weather5PageModule' },
    { path: 'w06', loadChildren: './blocks/weather/6/pages/weather6.module#Weather6PageModule' },
    { path: 'w07', loadChildren: './blocks/weather/7/pages/weather7.module#Weather7PageModule' },
    { path: 'w08', loadChildren: './blocks/weather/8/pages/weather8.module#Weather8PageModule' },
    { path: 'w09', loadChildren: './blocks/weather/9/pages/weather9.module#Weather9PageModule' },

    { path: 'i01', loadChildren: './blocks/weathericons/1/weather-icons/home.module#HomePageModule' },
    { path: 'i02', loadChildren: './blocks/weathericons/2/weather-icons/home.module#HomePageModule' },
    { path: 'i03', loadChildren: './blocks/weathericons/3/weather-icons/home.module#HomePageModule' },
    { path: 'i04', loadChildren: './blocks/weathericons/4/weather-icons/home.module#HomePageModule' },
    { path: 'i05', loadChildren: './blocks/weathericons/5/weather-icons/home.module#HomePageModule' },
    { path: 'i06', loadChildren: './blocks/weathericons/6/weather-icons/home.module#HomePageModule' },
    { path: 'i07', loadChildren: './blocks/weathericons/7/weather-icons/home.module#HomePageModule' },
    { path: 'i08', loadChildren: './blocks/weathericons/8/weather-icons/home.module#HomePageModule' },
    { path: 'i09', loadChildren: './blocks/weathericons/9/weather-icons/home.module#HomePageModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
