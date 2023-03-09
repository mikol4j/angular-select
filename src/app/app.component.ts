import { Component, ComponentFactoryResolver, Type } from '@angular/core';
import { OptionComponent } from './option.component';

@Component({
  selector: 'app-root',
  template: `<app-select-list [options]="options"></app-select-list>`,
})
export class AppComponent {
  constructor(public _cmpFctryRslvr: ComponentFactoryResolver) {}

  options: Option[] = [
    new Option('option1', this.createComponent('123') ),
    new Option('option2', this.createComponent('456'))
  ]
  createComponent(id: string) : any
  {
    let cmp = this._cmpFctryRslvr.resolveComponentFactory(OptionComponent);
    // cmp.instance.id = id;
    return cmp;
  }
}

export class Option
{
  constructor(name: string, dynamicComponentToLoad: Type<any>) {
    this.name = name;
    this.dynamicComponentToLoad = dynamicComponentToLoad;
  }
  name: string;
  dynamicComponentToLoad: Type<any>;
}

