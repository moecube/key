import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivateComponent} from './activate/activate.component';
import {DeviceComponent} from './device/device.component';

const routes: Routes = [
    {
        path: 'activate',
        component: ActivateComponent
    },
    {
        path: 'device',
        component: DeviceComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
