[![travis build](https://img.shields.io/travis/uniprank/ngx-scrollspy?label=Travis%3Abuild&style=flat-square)](https://travis-ci.org/uniprank/ngx-scrollspy)

You can use this angular service to spy scroll events from `window` or any other scrollable element.

This library implements an service to collect observables from scroll spy directives. It can be used to create you own components or if you prefer use one of the following directives.

See Examples here [Example](https://uniprank.github.io/ngx-scrollspy/test-cases)

## Installation

First you need to install the npm module:

```sh
npm install @uniprank/ngx-scrollspy --save
```

If you use SystemJS to load your files, you might have to update your config with this if you don't use `defaultJSExtensions: true`:

```js
System.config({
  packages: {
    '@uniprank/ngx-scrollspy': { defaultExtension: 'js' }
  }
});
```

Finally, you can use ngx-scrollspy in your Angular project (NOT AngularJS).
It is recommended to instantiate `ScrollSpyService` in the bootstrap of your application and to never add it to the "providers" property of your components, this way you will keep it as a singleton.
If you add it to the "providers" property of a component it will instantiate a new instance of the service that won't be initialized.

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollSpyModule } from '@uniprank/ngx-scrollspy';

@NgModule({
  imports: [BrowserModule, ScrollSpyModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Using

#### Spy window scroll

Use `ScrollSpyDirective` to spy on window as default or set also element to spy on a other scroll able element.

```js
import { NgModule, Component, Injectable, AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollSpyModule, ScrollSpyService, ScrollObjectInterface } from '@uniprank/ngx-scrollspy';

@Injectable()
@Component({
	selector: 'app',
	template: `<div uniScrollSpy="section-abc"></div>`
})
export class AppComponent implements AfterViewInit {
	constructor(private _scrollSpyService: ScrollSpyService) {}

	ngAfterViewInit() {
		this._scrollSpyService.getObservable('window').subscribe((element: ScrollObjectInterface) => {
			console.log('ScrollSpy::window: ', element);
		});
	}
}

@NgModule({
  imports: [
  	BrowserModule,
  	ScrollSpyModule.forRoot()
  ],
  declarations: [
  	AppComponent
  ],
  bootstrap: [ AppComponent ]
})
```

#### Spy any element scroll

Use `ScrollSpyElementDirective` to spy on any element. You must give an unique id to each instance.
This unique id is called elementID and you need this elementID to connect your `ScrollSpyItemDirective` or your `ScrollSpyDirective`.

```js
import { NgModule, Component, Injectable, AfterViewInit } from '@angular/core';
import { ScrollSpyModule, ScrollSpyService, ScrollObjectInterface } from '@uniprank/ngx-scrollspy';

@Injectable()
@Component({
	selector: 'yourComponent',
  template: `
  <div uniScrollSpyItem="part2" scrollElement="test">Get class active if part2 is in focus.</div>
	<div uniScrollSpyElement="test" style="max-height: 100px; overflow: auto;">
		<div uniScrollSpy="part1" style="height: 500px;"></div>
		<div uniScrollSpy="part2" style="height: 500px;"></div>
	</div>`
})
export class YourComponent implements AfterViewInit {

	constructor(private _scrollSpyService: ScrollSpyService) {}

	ngAfterViewInit() {
		this._scrollSpyService.getObservable('test').subscribe((element: ScrollObjectInterface) => {
			console.log('ScrollSpy::test: ', element);
		});
	}
}

@NgModule({
  imports: [
		ScrollSpyModule
  ],
  declarations: [
  	AppComponent
  ],
  providers: [ ]
})
export class YourModule { }
```

Because `ScrollSpyService` is a singleton, you can get any ScrollSpy observable from anywhere withing your application.

# TODO:

- Finish unit tests

## License

[MIT](LICENSE)
