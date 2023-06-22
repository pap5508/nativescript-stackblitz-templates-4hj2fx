import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core'

import { Item } from './item'
import { ItemService } from './item.service'
import { BottomNavigationBar, TabPressedEventData, TabReselectedEventData, TabSelectedEventData } from '@nativescript-community/ui-material-bottomnavigationbar';
import { firebase } from '@nativescript/firebase';
import { Router, NavigationExtras } from '@angular/router';
import { FirebaseEvent } from './firebase.event'
import { RouterExtensions } from '@nativescript/angular';
@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>

  constructor(private itemService: ItemService, private router: Router, private _ngZone: NgZone, private routerextensions: RouterExtensions) {

    firebase.addOnMessageReceivedCallback(
      this.onMessageReceived.bind(this)
    );
    
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
    
  }

  onMessageReceived(notificationMessage) {
    console.log("onMessageReceived called test : " + JSON.stringify(notificationMessage.data));
    // Sample notication message : 

    /* {"google.c.a.e":"1","google.c.fid":"xxxxxxxxxxxxxxxx-EcjwfUz","Body":"50","DisplayNotification":"true","gcm.message_id":"xxxxxxxxxxxxx","MessageId":"9729",
    "google.c.sender.id":"xxxxxxxxxxxxxxx",
    "ChatId":"81953","aps":{"alert":{"title":"Michele Richter (Support)","body":"50"},"badge":171},
    "Title":"Michele Richter (Support)","SystemId":"ChatApi:Hieber_Test","UnreadMessages":"171","title":"Michele Richter (Support)","body":"50"}
 */

    FirebaseEvent.firebaseEvent.next(notificationMessage);
    var self = this;
    if (notificationMessage.data.SystemId !== "BlogApi" && notificationMessage.data.DisplayNotification === "true") {
      console.log("1.ActiveTab--- ****** " + " route Path: " + self.router.url);
      this._ngZone.run(() => {
        // do your stuff here
        // any UI changes will be reflected

        setTimeout(() => {
          if ((self.router.url.includes("/items"))) {
            console.log("4.1 ................ ");
            let chatId = notificationMessage.data.ChatId;
            let chatName = notificationMessage.data.Title;
            let messageId = notificationMessage.data.MessageId;
            let chatType = 0;
            let groupId;
            let currentUserMemberType;
            let groupType;
            let isOwner;

            /*  true --> weiterleiten
            False --> nicht weiterleiten  */

            if (notificationMessage.data.groupId != null && notificationMessage.data.groupId != undefined) {
              console.log("4.2 ................ ");
              groupId = notificationMessage.data.groupId;
              currentUserMemberType = notificationMessage.data.currentUserMemberType;
              groupType = notificationMessage.data.groupType;
              isOwner = notificationMessage.data.isOwner;
              chatType = 1;
            }
            if (!chatType) {
              console.log("4.3 ............... ");
              let navigationExtras: NavigationExtras = {
                replaceUrl: true,
                preserveFragment: true,
                skipLocationChange: false,
                queryParams: {
                  chatId: chatId,
                  chatName: chatName,
                  messageId: messageId,
                  chatType: chatType
                }
              };
              self.routerextensions.navigate(["/chat-notification"], navigationExtras).then(res => {
                console.log("res: " + res);
              })
            }
            if (chatType) {
              console.log("4.4 ............... ");
              let navigationExtras: NavigationExtras = {
                replaceUrl: true,
                preserveFragment: true,
                skipLocationChange: false,
                queryParams: {
                  chatId: chatId,
                  chatName: chatName,
                  messageId: messageId,
                  groupId: groupId,
                  currentUserMemberType: currentUserMemberType,
                  groupType: groupType,
                  chatType: chatType,
                  isOwner: isOwner
                }
              };
              self.routerextensions.navigate(["/chat-notification"], navigationExtras);
            }
          }
        }, 500);

      });
    }
  }

  @ViewChild('bottomNavigationBar', { read: ElementRef, static: false })
  private _bottomNavigationBar: ElementRef<BottomNavigationBar>;

  onbottomNavigationBarLoaded(): void {
    console.log("loaded event");
    const bottomNavigationBar = this._bottomNavigationBar.nativeElement;
    bottomNavigationBar.showBadge(1);
    bottomNavigationBar.showBadge(2, 4);
  }

  onBottomNavigationTabPressed(args: TabPressedEventData): void {
    alert('This tab has isSelectable: false, and should be used to perform actions');
    console.log(`pressed tab index:  ${args.index}`);
  }

  onBottomNavigationTabSelected(args: TabSelectedEventData): void {
    console.log(`old tab index:  ${args.oldIndex}`);
    console.log(`selected tab index:  ${args.newIndex}`);    
  }

  onBottomNavigationTabReselected(args: TabReselectedEventData): void {
    alert('Tab Reselected');
    console.log(`reselected tab index:  ${args.index}`);
  }
}
