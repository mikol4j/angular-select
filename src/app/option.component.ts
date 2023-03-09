import { Component, Input } from '@angular/core';
import { Option } from './app.component';

@Component({
  selector: 'app-option',
  template: `test: {{option.name}}`,
})
export class OptionComponent {
    @Input() option!: Option;
}
