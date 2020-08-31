import { NgModule } from '@angular/core';
import { SettingsPage } from './settings.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [
        SettingsPage,
    ],
    imports: [
        ComponentsModule
    ],
})
export class SettingsPageModule { }
