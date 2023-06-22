import { AfterViewInit, Component } from '@angular/core';
import { openFilePicker, FilePickerOptions } from '@nativescript-community/ui-document-picker';
@Component({
    moduleId: module.id,
    selector: 'ns-third-tab',
    templateUrl: './thirdTab.component.html'
})

export class ThirdTabComponent implements AfterViewInit {
    ngAfterViewInit() {


    }

    async TapUiDocumentPickerOption() {
        let test: FilePickerOptions;
        // test.multipleSelection = false;
        test.pickerMode = 1;
        test.extensions = ["mp4", "pdf", "png"]
        await openFilePicker(test).then(res => {
            console.log("Res: " + JSON.stringify(res));
        })
    }
}


/*
multipleSelection?: boolean;
    permissions?: {
        read?: boolean;
        write?: boolean;
        persistable?: boolean;
        recursive?: boolean;
    };
    cloud?: boolean;
}
export interface FilePickerOptions extends CommonPickerOptions {
    extensions?: string[];
    pickerMode?: number;
}

*/