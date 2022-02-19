import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { CoreModule } from '../../@core/core.module';
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CoreModule,
    NbCardModule,
    NbButtonModule,
    MiscellaneousRoutingModule,
  ],
  declarations: [
    NotFoundComponent,
  ],
})
export class MiscellaneousModule { }
