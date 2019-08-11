import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-device',
    template: `
        <p>您的账号已经绑定了其他设备，无法在此设备上登陆，要解绑账号请联系群主</p>
        <p>{{key}}</p>
    `,
    styles: []
})
export class DeviceComponent {

    key = this.route.snapshot.queryParamMap.get('key');

    constructor(private route: ActivatedRoute) {
    }

}
