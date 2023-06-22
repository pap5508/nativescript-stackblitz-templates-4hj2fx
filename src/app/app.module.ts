import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { HttpClient, HttpClientModule } from "@angular/common/http";


import { FirstTabComponent } from "./firstTab/firstTab.component";
import { SecondTabComponent } from "./secondTab/secondTab.component";
import { ThirdTabComponent } from "./thirdTab/thirdTab.component";
import { FourthTabComponent } from "./fourthTab/fourthTab.component";
import { FifthTabComponent } from "./fifthTab/fifthTab.component";
import { NativeScriptMaterialBottomNavigationBarModule } from "@nativescript-community/ui-material-bottomnavigationbar/angular";
import { ChatModule } from "./chat/chat.module";



@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, HttpClientModule, ChatModule,
    NativeScriptMaterialBottomNavigationBarModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent, FirstTabComponent, SecondTabComponent, ThirdTabComponent, FourthTabComponent, FifthTabComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
