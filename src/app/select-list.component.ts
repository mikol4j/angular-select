import { Component, Input } from '@angular/core';
import { Option } from './app.component';

@Component({
  selector: 'app-select-list',
  template: `

    <mat-form-field appearance="fill">
    <mat-label>Favorite food</mat-label>
    <mat-select>
        <mat-option *ngFor="let option of options" [value]="option.name">
            <ng-container *ngComponentOutlet="option.dynamicComponentToLoad;"></ng-container>
        </mat-option>
    </mat-select>
    </mat-form-field>

  `,
})
export class SelectListComponent {
@Input() options: Option[] = [];
}
