import {Component} from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

@Component({
    selector: 'gui-pages',
    styleUrls: ['pages.component.scss'],
    templateUrl: `pages.component.html`,
})
export class PagesComponent {
    menu: NbMenuItem[] = [
        {
            title: 'home',
            link: '/pages/home',
            home: true,
            hidden: true,
        },
    ];
}
