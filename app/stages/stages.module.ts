import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { StagesRoutes } from './stages.routes';
import { StagesComponent } from './components/stages/stages.component';
import {NativeScriptCommonModule} from "nativescript-angular/common";
import {CardComponent} from "~/stages/components/card/card.component";
import {CountdownBarComponent} from "~/stages/components/countdown-bar/countdown-bar.component";
import {LinkComponent} from "~/stages/components/link/link.component";
import {PausePanelComponent} from "~/stages/components/pause-panel/pause-panel.component";
import {TableComponent} from "~/stages/components/table/table.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forChild(<any>StagesRoutes)
  ],
  declarations: [
      StagesComponent,
      TableComponent,
      CardComponent,
      CountdownBarComponent,
      LinkComponent,
      PausePanelComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class StagesModule { }
