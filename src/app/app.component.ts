import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `      
    <router-outlet></router-outlet>
  `,
  styles: [`
      :host {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%; 
      }
  `]
})
export class AppComponent {
  title = 'app';
}
