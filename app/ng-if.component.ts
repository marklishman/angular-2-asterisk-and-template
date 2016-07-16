import {Component} from '@angular/core';

@Component({
    selector: 'ng-if-template',
    template: `
        <h1>ngIf with template</h1>
        
        <h3>with <code>&lt;template&gt;</code> directive</h3>
         <p>
            <button (click)="showDirective=!showDirective">{{showDirective ? 'hide' : 'show'}}</button>
        </p>
        
        <div template="ngIf:showDirective">
            <p>
                <label><input #big type="radio" name="directiveSize" (change)="0" checked>Big</label>
                <label><input #small type="radio" name="directiveSize" (change)="0">Small</label>
            </p>
        
            <h2 template="ngIf:big.checked">Big header</h2>
            <p template="ngIf:small.checked">Small paragraph</p>
        </div>
        <hr>
        
        <h3>with <code>&lt;template&gt;</code> element</h3>
        <p>
            <button (click)="showElement=!showElement">{{showElement ? 'hide' : 'show'}}</button>
        </p>
        <template [ngIf]="showElement">
            <div>
                <p>
                    <label><input #big type="radio" name="templateSize" (change)="0" checked>Big</label>
                    <label><input #small type="radio" name="templateSize" (change)="0">Small</label>
                </p>
            
                <template [ngIf]="big.checked">
                    <h2>Big header</h2>
                </template>
                <template [ngIf]="small.checked">
                    <p>Small paragraph</p>
                </template>
            </div>
        </template>`
})
export class NgIfComponent {
    private showDirective = false;
    private showElement = false;
}