import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { Item } from './item'
import { ItemService } from './item.service'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {
  item: Item
  subiOS: any;
  private chatId: number;
  chatName: string;
  messageIdCheck: number;
  groupId: any;
  currentUserMemberType: any;
  groupType: any;
  chatType: any;
  isOwner: any;

  isItemVisible: boolean = false;
  constructor(private itemService: ItemService, private route: ActivatedRoute, private routerExtensions: RouterExtensions, private router: Router) {
    this.subiOS = this.route.queryParams.subscribe((params) => {
      // Retrieve all the Parameter passed from Main screen
      this.chatId = params["chatId"];
      this.chatName = params["chatName"];
      this.messageIdCheck = params["messageId"];
      this.groupId = params["groupId"];
      this.currentUserMemberType =
        params["currentUserMemberType"];
      this.groupType = params["groupType"];
      this.chatType = params["chatType"];
      this.isOwner = params["isOwner"];
    });
  }

  ngOnInit(): void {
    /* const id = +this.route.snapshot.params.id
    this.item = this.itemService.getItem(id) */
  }

  goBack() {
    this.routerExtensions.back();
  }
}
