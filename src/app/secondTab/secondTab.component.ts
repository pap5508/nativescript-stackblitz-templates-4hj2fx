import { AfterViewInit, Component } from '@angular/core';
import {
    VideoPickerOptions, Mediafilepicker
} from "nativescript-mediafilepicker";
import { isIOS, Folder, knownFolders, path, File, Utils } from '@nativescript/core';

@Component({
    moduleId: module.id,
    selector: 'ns-second-tab',
    templateUrl: './secondTab.component.html'
})

export class SecondTabComponent implements AfterViewInit {
    ngAfterViewInit() { }

    TappedToOpenVideoPicker() {
        console.log("Tapped TappedToOpenVideoPicker");
        this.videoPickerOptionSelected();
    }
    videoPickerOptionSelected() {
        console.log("videoPickerOptionSelected");
        let allowedVideoQualities = [];

        if (isIOS) {
            allowedVideoQualities = [AVCaptureSessionPreset1920x1080, AVCaptureSessionPresetHigh];  // get more from here: https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset?language=objc
        }

        let options: VideoPickerOptions = {
            android: {
                isCaptureMood: false, // if true then camera will open directly.
                isNeedCamera: true,
                maxNumberFiles: 1,
                isNeedFolderList: true,
                maxDuration: 10,

            },
            ios: {
                isCaptureMood: false, // if true then camera will open directly.
                videoMaximumDuration: 1,
                allowedVideoQualities: allowedVideoQualities
            }
        };

        let mediafilepicker = new Mediafilepicker();
        mediafilepicker.openVideoPicker(options);

        mediafilepicker.on("getFiles", function (res) {
            let results = res.object.get('results');
            if (results) {
                let filename = "";
                let result = results[0];
                let n = result.file.lastIndexOf("/");
                // decode URI used because Plugin Automatically returns encoded URL path
                var filepathUrl = decodeURI(result.file.replace("file:///", "/"))

                filename = result.file.substring(n + 1);
                var string = filename;
                const fileSize = (File.fromPath(filepathUrl).size) / (1000 * 1000);
                console.log("File Size MB: " + fileSize);

                Utils.openFile(filepathUrl);

            }
            console.dir(results);
        });

        // for iOS iCloud downloading status
        mediafilepicker.on("exportStatus", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
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

}