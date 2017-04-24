import {Component} from 'angular2/core';
import {Source} from './form';

@Component({
    selector: 'main-body',
    templateUrl: 'app/ts/body/body.component.html'
})

export class BodyComponent {
    source = new Source();
}
