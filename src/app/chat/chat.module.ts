import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { ChatRoutingModule } from './chat.routing'

import { ChatDetailComponent } from './ChatDetail.component'
import { HttpClient, HttpClientModule } from "@angular/common/http";



@NgModule({
    bootstrap: [ChatDetailComponent],
    imports: [NativeScriptModule, ChatRoutingModule,HttpClientModule,
      ],
    declarations: [ChatDetailComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
  })
  export class ChatModule { }
  