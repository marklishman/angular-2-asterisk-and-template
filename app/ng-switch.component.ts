import { Component } from '@angular/core';

@Component({
    selector: 'ng-switch-template',
    template: `
        <h1>ngSwitch with template</h1>
        
        <select #select [(ngModel)]="choice">
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
            <option value="another">another</option>
        </select>
        
        <p [ngSwitch]="choice">
            <template [ngSwitchCase]="'one'"><span>First</span></template>
            <template [ngSwitchCase]="'two'"><span>Second</span></template>
            <template [ngSwitchCase]="'three'"><span>Third</span></template>
            <template ngSwitchDefault><span>Default</span></template>
        </p>`
})
export class NgSwitchComponent {
    private choice: string = 'one';
}