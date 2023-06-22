import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { ChatDetailComponent } from './ChatDetail.component'

const routes: Routes = [
   
    { path: 'chat-notification', component: ChatDetailComponent },

  ]
  
  @NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
  })
  export class ChatRoutingModule { }
  