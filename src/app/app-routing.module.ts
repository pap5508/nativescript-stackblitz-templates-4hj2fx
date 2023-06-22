import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { FirstTabComponent } from "./firstTab/firstTab.component";
import { SecondTabComponent } from "./secondTab/secondTab.component";
import { ThirdTabComponent } from "./thirdTab/thirdTab.component";
import { FourthTabComponent } from "./fourthTab/fourthTab.component";
import { FifthTabComponent } from "./fifthTab/fifthTab.component";

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'ns-details', component: ItemDetailComponent },
  { path: 'ns-first-tab', component: FirstTabComponent },
  { path: 'ns-second-tab', component: SecondTabComponent },
  { path: 'ns-third-tab', component: ThirdTabComponent },
  { path: 'ns-fourth-tab', component: FourthTabComponent },
  { path: 'ns-fifth-tab', component: FifthTabComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
