import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ActivateComponent} from './activate/activate.component';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { DeviceComponent } from './device/device.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        ActivateComponent,
        DeviceComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
