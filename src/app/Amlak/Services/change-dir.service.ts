

import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ChangeDirectionService{
    
    changeCssFile(lang: string) {
        let headTag = document.getElementsByTagName("head")[0] as HTMLHeadElement;
        let existingLinkOne = document.getElementById("langCssOne") as HTMLLinkElement;
        let existingLinkTwo = document.getElementById("langCssTwo") as HTMLLinkElement;
        let bundleNameOne = lang === "ar" ? "arabicStyle.css" : "englishStyle.css";
        let bundleNameTwo = lang === "ar" ? "./assets/css/style-rtl.css" : "./assets/css/style-ltr.css";

        if (existingLinkOne) {
            existingLinkOne.href = bundleNameOne;
        } else {
            let newLink = document.createElement("link");
            newLink.rel = "stylesheet";
            newLink.type = "text/css";
            newLink.id = "langCssOne";
            newLink.href = bundleNameOne;
            headTag.appendChild(newLink);
        }

        if(existingLinkTwo){
            existingLinkTwo.href = bundleNameTwo;
        }
        else{
            let newLink = document.createElement("link");
            newLink.rel = "stylesheet";
            newLink.type = "text/css";
            newLink.id = "langCssTwo";
            newLink.href = bundleNameTwo;
            headTag.appendChild(newLink);
        }
    }
}