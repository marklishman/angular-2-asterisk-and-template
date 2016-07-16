import { Component } from '@angular/core';

import { NgIfComponent } from "./ng-if.component";
import { NgSwitchComponent } from "./ng-switch.component";
import { NgForComponent } from "./ng-for.component";

@Component({
    selector: 'app',
    template: `
        <ng-if-template *ngIf="showSection('ng-if-template')"></ng-if-template>
        <ng-switch-template *ngIf="showSection('ng-switch-template')"></ng-switch-template>
        <ng-for-template *ngIf="showSection('ng-for-template')"></ng-for-template>`,
    directives: [
        NgIfComponent,
        NgSwitchComponent,
        NgForComponent
    ]
})
export class AppComponent {

    private showSection(name: string): boolean {
        if (!window.location.search) {
            return true;
        }
        const PARAM = window.location.search.substr(1);
        return PARAM === name;
    }
}