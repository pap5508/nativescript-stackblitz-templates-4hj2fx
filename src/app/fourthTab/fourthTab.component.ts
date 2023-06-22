import { AfterViewInit, Component, ElementRef, ViewChild, ChangeDetectorRef, NgZone } from '@angular/core';
import * as imagepicker from "@nativescript/imagepicker";
import { ImageSource, Folder, knownFolders, path, Color, Dialogs, File, isIOS } from '@nativescript/core';
import { getString } from '@nativescript/core/application-settings';
import { isAndroid } from '@nativescript/core';
import { Carousel } from "@nstudio/nativescript-carousel";
import { generateBarCode } from '@nativescript-community/ui-barcodeview';
import { BarcodeFormat } from '@nativescript/firebase/mlkit/barcodescanning';
import { openFilePicker, FilePickerOptions } from '@nativescript-community/ui-document-picker';
import * as fs from '@nativescript/core/file-system';
import * as mediaPicker from 'nativescript-mediafilepicker';
@Component({
    moduleId: module.id,
    selector: 'ns-fourth-tab',
    templateUrl: './fourthTab.component.html'
})

export class FourthTabComponent implements AfterViewInit {

    constructor(private changeDetectionRef: ChangeDetectorRef, private ngZone: NgZone) {

    }
    ngAfterViewInit() {
        var test = Date.now() + 10000;
        console.log(
            '1. Date now: ' + Date.now() + ' Add Seconds: ' + test
        );
        console.log(
            '2. Date now: ' + Date.now() + ' Add Seconds: ' + Date.now() + 1000
        );
        this.createBarcode();
    }
    isAndroid = isAndroid;
    /* Android */

    imagePickerAndroid() {
        console.log("imagePickerAndroid Tapped");
        this.imagePickerAndroidOpen();
    }

    DocumentAndroid() {
        console.log("DocumentAndroid Tapped");

        this.DocumentAndroidOpen();
    }

    cameraAndroid() {
        console.log("cameraAndroid Tapped");
        this.cameraAndroidOpen();
    }

    imagePickerAndroidOpen() {
        console.log("imagePickerAndroidOpen Open");
        let extensions = [];


        extensions = ["pdf"];


        let options: mediaPicker.FilePickerOptions = {
            android: {
                extensions: extensions,
                maxNumberFiles: 1
            },
            ios: {
                extensions: extensions,
                multipleSelection: true
            }
        };

        let mediafilepicker = new mediaPicker.Mediafilepicker();
        mediafilepicker.openFilePicker(options);

        mediafilepicker.on("getFiles", function (res) {

            this._ngZone.run(() => {
                // do your stuff here
                // any UI changes will be reflected
                let results = res.object.get('results');
                console.dir(results);
            });

        });

        mediafilepicker.on("error", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });

        mediafilepicker.on("cancel", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });
    }

    DocumentAndroidOpen() {
        console.log("DocumentAndroidOpen Open");
        let extensions = [];

        if (!isAndroid) {
            extensions = [kUTTypePDF, kUTTypeText, kUTTypeRTF];
        } else {
            extensions = ["txt", "pdf", "ppt"];
        }

        let options: FilePickerOptions = {

            extensions: extensions,
            pickerMode: 1,
            multipleSelection: false
        };

        openFilePicker(options).then(res => {
            this.ngZone.run(() => {
                console.log("Res: " + JSON.stringify(res));
                let results = res;
                if (results.files.length != 0 && results.files.length != undefined) {
                    let filename = "";
                    let result = results.files[0];
                    let n = result.lastIndexOf("/");
                    // decode URI used because Plugin Automatically returns encoded URL path
                    var filepathUrl = decodeURI(result.replace("file:///", "/"));

                    filename = result.substring(n + 1);
                    var string = filename;
                    Dialogs
                        .confirm({
                            title: "this.application_name",
                            message:
                                "this.attachment_document_message string question_document",
                            okButtonText: "this.yes",
                            cancelButtonText: "this.no",
                        })
                        .then((result) => {
                            // result argument is boolean
                            if (result) {
                                const fileSize = fs.File.fromPath(filepathUrl).size;

                                console.log("File Size: " + fileSize);
                                if (fileSize < 1) {
                                    console.log("File Size document_is_small: " + fileSize);
                                    // SnackBarDialog.showSimple(this.document_is_small);
                                    return;
                                }
                                var fileUploadChat = new FileUploadChat();

                                fileUploadChat.filename = Date.now() + ".pdf";
                                fileUploadChat.base64 = this.getBase64String(filepathUrl);
                                fileUploadChat.isImage = false;
                                fileUploadChat.size = fileSize;
                                fileUploadChat.filepath = filepathUrl;
                                console.log("JSON.Document: " + JSON.stringify(fileUploadChat));

                                this.callMethod();
                            }
                        });
                }
            });

        }, error => {
            console.log("Error: " + JSON.stringify(error));
        });
    }

    public getBase64String(paths) {
        console.log("Paths: " + paths);
        const sourceFile: File = File.fromPath(paths);
        const data = sourceFile.readSync();
        try {
            if (isIOS) {
                return data.base64EncodedStringWithOptions(0);
            } else {
                return android.util.Base64.encodeToString(
                    data,
                    android.util.Base64.NO_WRAP
                );
            }
        }
        catch {
            console.log("Exception occured");
        }

    }

    callMethod() {
        console.log("call this method");
    }

    cameraAndroidOpen() {
        console.log("cameraAndroid Open");
    }


    /* iOS */

    imagePickeriOS() {
        console.log("imagePickeriOS Tapped");
        this.imagePickeriOSOpen();
    }

    DocumentiOS() {
        console.log("DocumentiOS Tapped");

        this.DocumentiOSOpen();
    }

    cameraiOS() {
        console.log("cameraiOS Tapped");
        this.cameraiOSOpen();
    }

    imagePickeriOSOpen() {
        console.log("imagePickeriOSOpen Open");
    }

    DocumentiOSOpen() {
        console.log("DocumentiOSOpen Open");
    }

    cameraiOSOpen() {
        console.log("cameraiOS Open");
    }

    public createBarcode() {
        if (this.tempArray.length > 0) {
            for (let index = 0; index < this.tempArray.length; index++) {
                var element = this.tempArray[index];
                element.image = new ImageSource();
                let imageCreate = generateBarCode({
                    text: element.EANCode,
                    type: 'CODE_128',
                    width: 80,
                    height: 100,
                    frontColor: "black",
                    backColor: "white"
                });
                element.image = new ImageSource();
                element.image = imageCreate;
                /*  element.geldkarteart = this.tempArray[index].geldkarteart = "test";
                 element.jahr = this.tempArray[index].jahr; */

                console.log("Each item: " + JSON.stringify(element));
                /* const img = zx.ger({
                  encode: this.qrText,
                  height: 200,
                  width: 500,
                  format: ZXing.CODE_128
                }); */
            }
            this.changeDetectionRef.detectChanges();
            setTimeout(() => {
                this.carouselView.nativeElement.refresh();
            });

        }
    }


    @ViewChild("myCarousel", { static: false }) carouselView: ElementRef<Carousel>;
    public myTapPageEvent(args) {
        console.log('Tapped page index: ' + (this.carouselView.nativeElement.selectedPage));
    }

    public myChangePageEvent(args) {
        console.log('Page changed to index: ' + args.index);
        setTimeout(() => {
            this.carouselView.nativeElement.refresh();
        }, 100);
    };

    tempArray = [
        {
            "EANCode": "999012345600011",
            "geldkarteart": "Corona-Prämien Karte",
            "jahr": 2020,
            image: new ImageSource()
        }, {
            "EANCode": "0104041",
            "geldkarteart": "Weihnachtsgeldkarte",
            "jahr": 2020,
            image: new ImageSource()
        }, {
            "EANCode": "01040415781541282156811524840354 ",
            "geldkarteart": "Sonderzahlungskarte",
            "jahr": 2021,
            image: new ImageSource()
        }, {

            "EANCode": "999012345600011",
            "geldkarteart": "Corona-Prämien Karte",
            "jahr": 2020,
            image: new ImageSource()
        }, {
            "EANCode": "999012345600011",
            "geldkarteart": "Urlaubsgeldkarte",
            "jahr": 2020,
            image: new ImageSource()
        }, {
            "EANCode": "999012345600011",
            "geldkarteart": "Sonderzahlungskarte",
            "jahr": 2020,
            image: new ImageSource()
        }, {
            "EANCode": "999012345600011",
            "geldkarteart": "Weihnachtsgeldkarte",
            "jahr": 2020,
            image: new ImageSource()
        }, {
            "EANCode": "999012345600011",
            "geldkarteart": "Urlaubsgeldkarte",
            "jahr": 2020,
            image: new ImageSource()
        }, {
            "EANCode": "999012345600011",
            "geldkarteart": "Sonderzahlungskarte",
            "jahr": 2020,
            image: new ImageSource()
        }, {
            "EANCode": "999012345600011",
            "geldkarteart": "Sonderzahlungskarte",
            "jahr": 2020,
            image: new ImageSource()
        }, {
            "EANCode": "999012345600011",
            "geldkarteart": "Sonderzahlungskarte",
            "jahr": 2020,
            image: new ImageSource()
        }
    ]


}

export class BarcodeOptions {
    text: string;
    type: BarcodeFormat;
    width: number;
    height: number;
    frontColor?: Color | string;
    backColor?: Color | string;
}

/*        let context = imagepicker.create({
            mode: "multiple" // use "multiple" for multiple selection
        });
        context
            .authorize()
            .then(function () {
                return context.present();
            })
            .then(function (selection) {
                setTimeout(() => {
                    selection.forEach(async selected => {
                        var filePathReturn = await ImageSource.fromAsset(selected).then(image => {
                            const folder: Folder = knownFolders.documents();
                            var name = Date.now() + ".jpg";
                            console.log("Name: " + name);
                            let paths = path.join(folder.path, name);
                            console.log("Path: " + path);
                            var base64ImageData;
                            var base64 = image.toBase64String("jpg", Number.parseInt(getString("imageQuality", "95")));;
                            var filepath = paths;
                            console.log("Path: " + name + "   FilePath: " + filepath);
                            return filepath;
                        });
                        this.callthisMethod();
                        return filePathReturn;
                    })

                }, 100);

            }).catch(function (e) {
                // process error
            });


    callthisMethod(filepath: string, image: new ImageSource()) {
        console.log("called this method...");
    }
            */

export class FileUploadChat {
    filename: string;
    base64: string;
    isImage: boolean;
    size: number;
    filepath: string;
}