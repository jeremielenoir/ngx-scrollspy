import { Directive, Input, Output, EventEmitter, OnDestroy, HostBinding, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScrollSpyService } from './scroll-spy.service';

@Directive({
    selector: '[uniScrollItem]'
})
export class ScrollItemDirective implements OnDestroy, AfterViewInit {
    @HostBinding('class.active') classActive: boolean = false;

    @Input('uniScrollItem') itemId: string;
    @Input() scrollElement: string = 'window';

    @Output() activeEvent: EventEmitter<boolean> = new EventEmitter();

    private _subscriber: Subscription;

    constructor(private _scrollSpyService: ScrollSpyService) {}

    ngOnDestroy(): void {
        if (this._subscriber) {
            this._subscriber.unsubscribe();
        }
        this._scrollSpyService.deleteItem(this.itemId);
    }

    ngAfterViewInit(): void {
        this._subscriber = this._scrollSpyService.observe(this.scrollElement).subscribe(element => {
            let _active;
            if (element != null) {
                _active = element.id === this.itemId;
                this.activeEvent.emit(_active);
            } else {
                _active = false;
            }
            setTimeout(() => (this.classActive = _active));
        });
    }
}
