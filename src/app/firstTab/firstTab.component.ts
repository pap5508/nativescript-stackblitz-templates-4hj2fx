import { AfterViewInit, Component } from '@angular/core';
import { ApplicationSettings, isAndroid } from '@nativescript/core';

@Component({
    moduleId: module.id,
    selector: 'ns-first-tab',
    templateUrl: './firstTab.component.html'
})
export class FirstTabComponent implements AfterViewInit {

    oneTabItems = [];
    oneTabItemsKachel = [];
    constructor() { }
    smallKachelBoolean: boolean = ApplicationSettings.getBoolean("smallKachelView", false);
    mediumKachelBoolean: boolean = true;
    bigKachelBoolean: boolean = ApplicationSettings.getBoolean("bigKachelView", false);


    itemHeightChange: any = Number.parseInt(ApplicationSettings.getString("selectedHomeIconSize", "125"));
    spanCountCheck: number = Number.parseInt(ApplicationSettings.getString("selectedHomeIconSize", "125")) > 125 ? 2 : 3;

    countries: { name: string, imageSrc: string }[] = [
        { name: "Australia", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "Belgium", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "Bulgaria", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "Canada", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "Switzerland", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "China", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "Czech Republic", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "Germany", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "Spain", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "Ethiopia", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "Croatia", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "Hungary", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "Italy", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "Jamaica", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "Romania", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "Russia", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
        { name: "United States", imageSrc: "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg" },
    ];


    ngAfterViewInit() {
        this.loadKachelOfflineandOnline();
    }
    loadKachelOfflineandOnline() {
        this.oneTabItemsKachel = [{ "notificationCount": null, "id": 13, "tileName": "News", "tileMenuUrl": null, "tilePosition": 1, "tileColor": "#B93A3A", "tileImageLarge": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "tileImageSmall": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "navigation": "News", "privacyPolicyAgreed": "false", "privacyPolicyModuleEnabled": "false", "rolePermissionsAgreed": "true", "kachelSize": 1, "acceptedLanguageTileName": "News " },
        { "notificationCount": null, "id": 13, "tileName": "News", "tileMenuUrl": null, "tilePosition": 1, "tileColor": "#B93A3A", "tileImageLarge": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "tileImageSmall": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "navigation": "News", "privacyPolicyAgreed": "false", "privacyPolicyModuleEnabled": "false", "rolePermissionsAgreed": "true", "kachelSize": 1, "acceptedLanguageTileName": "News " },
        { "notificationCount": null, "id": 13, "tileName": "News", "tileMenuUrl": null, "tilePosition": 1, "tileColor": "#B93A3A", "tileImageLarge": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "tileImageSmall": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "navigation": "News", "privacyPolicyAgreed": "false", "privacyPolicyModuleEnabled": "false", "rolePermissionsAgreed": "true", "kachelSize": 1, "acceptedLanguageTileName": "News " },
        { "notificationCount": null, "id": 13, "tileName": "News", "tileMenuUrl": null, "tilePosition": 1, "tileColor": "#B93A3A", "tileImageLarge": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "tileImageSmall": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "navigation": "News", "privacyPolicyAgreed": "false", "privacyPolicyModuleEnabled": "false", "rolePermissionsAgreed": "true", "kachelSize": 1, "acceptedLanguageTileName": "News " },
        { "notificationCount": null, "id": 13, "tileName": "News", "tileMenuUrl": null, "tilePosition": 1, "tileColor": "#B93A3A", "tileImageLarge": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "tileImageSmall": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "navigation": "News", "privacyPolicyAgreed": "false", "privacyPolicyModuleEnabled": "false", "rolePermissionsAgreed": "true", "kachelSize": 1, "acceptedLanguageTileName": "News " },
        { "notificationCount": null, "id": 13, "tileName": "News", "tileMenuUrl": null, "tilePosition": 1, "tileColor": "#B93A3A", "tileImageLarge": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "tileImageSmall": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "navigation": "News", "privacyPolicyAgreed": "false", "privacyPolicyModuleEnabled": "false", "rolePermissionsAgreed": "true", "kachelSize": 1, "acceptedLanguageTileName": "News " },
        { "notificationCount": null, "id": 13, "tileName": "News", "tileMenuUrl": null, "tilePosition": 1, "tileColor": "#B93A3A", "tileImageLarge": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "tileImageSmall": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "navigation": "News", "privacyPolicyAgreed": "false", "privacyPolicyModuleEnabled": "false", "rolePermissionsAgreed": "true", "kachelSize": 1, "acceptedLanguageTileName": "News " },
        { "notificationCount": null, "id": 13, "tileName": "News", "tileMenuUrl": null, "tilePosition": 1, "tileColor": "#B93A3A", "tileImageLarge": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "tileImageSmall": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "navigation": "News", "privacyPolicyAgreed": "false", "privacyPolicyModuleEnabled": "false", "rolePermissionsAgreed": "true", "kachelSize": 1, "acceptedLanguageTileName": "News " },
        { "notificationCount": null, "id": 13, "tileName": "News", "tileMenuUrl": null, "tilePosition": 1, "tileColor": "#B93A3A", "tileImageLarge": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "tileImageSmall": "https://www.photographyblog.com/imager/entryimages/7675/kodak_pixpro_fz201_photos_8c9cd6ffa9b02044a7a3327bc82c5649.jpg", "navigation": "News", "privacyPolicyAgreed": "false", "privacyPolicyModuleEnabled": "false", "rolePermissionsAgreed": "true", "kachelSize": 1, "acceptedLanguageTileName": "News " },
        
        ];
        this.setListViewLayout();
    }
    public setListViewLayout() {
        if (ApplicationSettings.getBoolean("smallKachelView")) {
            console.log("Tapped on smallKachelBoolean");
            this.itemHeightChange = 65;
            this.spanCountCheck = 1;
        }
        else if (ApplicationSettings.getBoolean("bigKachelView")) {
            console.log("Tapped on bigKachelBoolean");
            this.itemHeightChange = 175;
            this.spanCountCheck = 2;
        }
        else {
            console.log("Tapped on mediumKachelBoolean");
            if (isAndroid) {
                this.itemHeightChange = 100;
                this.spanCountCheck = 3;
            }
            else {
                this.itemHeightChange = 125;
                this.spanCountCheck = 3;
            }

        }
    }
}