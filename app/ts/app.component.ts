import {Component} from 'angular2/core';
import {HeadComponent} from './head/head.component';
import {BodyComponent} from './body/body.component';
import {FooterComponent} from './footer/footer.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    styleUrls: ['app/ts/app.component.css'],
    directives: [HeadComponent,BodyComponent,FooterComponent]
})

export class AppComponent {}
