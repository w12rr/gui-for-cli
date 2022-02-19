import { NgModule } from '@angular/core';
import {NbLayoutModule, NbMenuModule, NbSidebarModule} from '@nebular/theme';

import { CoreModule } from '../../@core/core.module';
import { PagesComponent } from './pages/pages/pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';

@NgModule({
    imports: [
        PagesRoutingModule,
        CoreModule,
        NbMenuModule,
        MiscellaneousModule,
        NbLayoutModule,
        NbSidebarModule,
    ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
