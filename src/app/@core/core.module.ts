import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    NbActionsModule,
    NbLayoutModule,
    NbMenuModule,
    NbSearchModule,
    NbSidebarModule,
    NbUserModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbThemeModule,
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {NbSecurityModule} from '@nebular/security';
import {DEFAULT_THEME} from './theme/theme.default';
import {COSMIC_THEME} from './theme/theme.cosmic';
import {CORPORATE_THEME} from './theme/theme.corporate';
import {DARK_THEME} from './theme/theme.dark';
import {LayoutService} from './services/layout.service';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

const NB_MODULES = [
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbSecurityModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
];

const COMPONENTS = [
    HeaderComponent,
    FooterComponent,
];

const PROVIDERS = [
    ...NbThemeModule.forRoot(
        {
            name: 'default',
        },
        [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME],
    ).providers,
    LayoutService,
];

@NgModule({
    imports: [CommonModule, ...NB_MODULES],
    exports: [CommonModule, ...COMPONENTS],
    declarations: [...COMPONENTS],
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: PROVIDERS,
        };
    }
}
