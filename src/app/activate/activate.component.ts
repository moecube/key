import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-activate',
    template: `
        <div class="container">
            <h2>您的游戏尚未激活</h2>
            <form (submit)="activate()">
                <div class="form-group">
                    <label for="activate">请输入激活码</label>
                    <input type="text" class="form-control" id="activate" name="activate" [(ngModel)]="key">
                </div>
                <button type="submit" class="btn btn-primary">提交</button>
            </form>
        </div>
    `,
    styles: []
})
export class ActivateComponent {

    key: string;

    constructor(private http: HttpClient, private route: ActivatedRoute) {
    }

    async activate() {
        try {
            await this.http.post('https://api.moecube.com/pay/activate.php', {
                'key': this.key,
                'sso': this.route.snapshot.queryParamMap.get('sso')
            }).toPromise();
            const url = new URL('https://api.moecube.com/pay/jwt.php');
            url.searchParams.set('callback', this.route.snapshot.queryParamMap.get('callback'));
            url.searchParams.set('app_id', this.route.snapshot.queryParamMap.get('app_id'));
            url.searchParams.set('sso', this.route.snapshot.queryParamMap.get('sso'));
            url.searchParams.set('device_id', this.route.snapshot.queryParamMap.get('device_id'));
            location.replace(url.toString());
        } catch (error) {
            if (error.status === 403) {
                alert('激活码不正确哦');
            } else {
                console.error(error);
                alert(error.message);
            }
        }
    }
}
