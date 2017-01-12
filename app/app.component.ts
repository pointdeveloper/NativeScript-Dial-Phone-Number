import { Component } from "@angular/core";
import * as permissions from "nativescript-permissions";
import * as TNSPhone from 'nativescript-phone';
declare var android;

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public enteredNumber:number;
    
    public dialNumber() {
        permissions.requestPermission(android.Manifest.permission.CALL_PHONE, 
                                    "App Needs This Permission To Make Phone Calls")
            .then(()=>{
                console.log("Got Permission!");
                console.log(this.enteredNumber);
                TNSPhone.dial(String(this.enteredNumber), false);
            })
            .catch(()=>{
                console.log("Permission Denied!");
            });
    }
}
