import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RouterExtensions } from '@nativescript/angular';
// Component initialize Information

@Component({
    moduleId: module.id,
    selector: "chat-notification",
    templateUrl: "ChatDetail.component.html"
})


export class ChatDetailComponent implements OnInit {

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
    constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions, private router: Router) {
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
        console.log("1. this component is created");
    }

    ngOnInit(): void {
        /* const id = +this.route.snapshot.params.id
        this.item = this.itemService.getItem(id) */
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

        console.log("2. this component is created");
    }

    goBack() {
        console.log("back navigation not working");
        this.routerExtensions.back();
    }
}
